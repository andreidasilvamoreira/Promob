export interface ClientEntity {
  id: number;
  name: string;
  phone?: string | null;
  email?: string | null;
  notes?: string | null;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
