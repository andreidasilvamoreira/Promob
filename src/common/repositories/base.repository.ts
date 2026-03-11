import { Pool } from 'pg';
import { CreateData, FindAllOptions, UpdateData } from './repository.types';

export abstract class BaseRepository<T> {
  constructor(
    protected readonly db: Pool,
    protected readonly tableName: string,
  ) {}

  async findAll(options?: FindAllOptions): Promise<T[]> {
    const limit = options?.limit;
    const offset = options?.offset ?? 0;
    const orderBy = options?.orderBy ?? 'id';
    const orderDirection = options?.orderDirection ?? 'ASC';

    let query = `SELECT * FROM ${this.tableName} ORDER BY ${orderBy} ${orderDirection}`;
    const values: unknown[] = [];

    if (limit !== undefined) {
      values.push(limit);
      query += `LIMIT $${values.length}`;
    }

    if (offset > 0) {
      values.push(offset);
      query += `OFFSET $${values.length}`;
    }

    const result = await this.db.query(query, values);
    return result.rows;
  }

  async findById(id: number): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1 LIMIT 1`;
    const result = await this.db.query(query, [id]);
    return result.rows[0] ?? null;
  }

  async create(data: CreateData<T>): Promise<T> {
    const entries = Object.entries(data as Record<string, unknown>);

    const columns = entries.map(([key]) => key).join(', ');
    const placeholders = entries.map((_, index) => `$${index + 1}`).join(', ');
    const values = entries.map(([, value]) => value);

    const query = `INSERT INTO ${this.tableName} (${columns}) VALUE (${placeholders}) RETURNING *`;

    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(id: number, data: UpdateData<T>): Promise<T | null> {
    const entries = Object.entries(data as Record<string, unknown>);

    if (entries.length === 0) {
      return this.findById(id);
    }

    const setClause = entries
      .map(([key], index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = entries.map(([, value]) => value);

    const query = `
    UPDATE ${this.tableName} 
    SET ${setClause}, updated_at = NOW() 
    WHERE id = $${values.length + 1} 
    RETURNING *
    `;

    const result = await this.db.query(query, [...values, id]);
    return result.rows[0] ?? null;
  }

  async delete(id: number): Promise<void> {
    const query = `
    DELETE FROM ${this.tableName}
    WHERE id = $1
    `;

    await this.db.query(query, [id]);
  }
}
