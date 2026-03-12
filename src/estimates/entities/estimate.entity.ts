export interface EstimateEntity {
  id: number;
  project_id: number;
  version: number;
  total_material_cost: string;
  margin_percent: string;
  total_price: string;
  created_at: Date;
  updated_at: Date;
}
