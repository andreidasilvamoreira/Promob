export interface ProjectItemEntity {
  id: number;
  project_id: number;
  product_id: number;
  quantity: number;
  width_mm: number;
  height_mm: number;
  depth_mm: number;
  created_at: Date;
  updated_at: Date;
}
