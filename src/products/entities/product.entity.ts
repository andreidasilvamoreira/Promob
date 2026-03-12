export interface ProductEntity {
  id: number;
  name: string;
  category: string | null;
  description: string | null;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
