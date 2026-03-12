export interface UserEntity {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  role: 'ADMIN' | 'USER';
  created_at: Date;
  updated_at: Date;
}
