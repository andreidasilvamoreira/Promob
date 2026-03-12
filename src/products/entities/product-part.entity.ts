export interface ProductPartEntity {
  id: number;
  product_id: number;
  material_id: number;
  name: string;
  quantity: number;
  width_mm: number;
  height_mm: number;
  edge_band: boolean;
  created_at: Date;
  updated_at: Date;
}
