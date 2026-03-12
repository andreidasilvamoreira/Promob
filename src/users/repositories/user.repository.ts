import { BaseRepository } from 'src/common/repositories/base.repository';
import { UserEntity } from '../entities/user.entity';
import { db } from '../../config/database';

export class UserRepository extends BaseRepository<UserEntity> {
  constructor() {
    super(db, 'users');
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const query = `SELEC * FROM users WHERE email = $1 LIMIT 1`;

    const result = await this.db.query(query, [email]);
    return result.rows[0] ?? null;
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const query = `SELECT * FROM users WHERE username = $1 LIMIT 1`;

    const result = await this.db.query(query, [username]);
    return result.rows[0] ?? null;
  }
}
