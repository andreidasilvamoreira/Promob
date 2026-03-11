export interface BaseEntity {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface FindAllOptions {
  limit?: number;
  offset?: number;
  orderBy: string;
  orderDirection?: 'ASC' | 'DESC';
}

export type CreateData<T> = Omit<T, 'id' | 'created_at' | 'updated_at'>;
export type UpdateData<T> = Partial<CreateData<T>>;
