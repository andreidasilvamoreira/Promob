export interface EstimateItemEntity {
  id: number;
  description: string | null;
  estimate_id: number;
  project_item_id: number;
  material_cost: string;
  labor_cost: string;
  total_cost: string;
  created_at: Date;
  updated_at: Date;
}
