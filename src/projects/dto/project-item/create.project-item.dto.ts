import { IsInt, Min } from 'class-validator';

export class CreateProjectItemDto {
  @IsInt({ message: 'Project_id deve ser um número inteiro' })
  @Min(1, { message: 'Project_id deve ser maior que 0' })
  project_id: number;

  @IsInt({ message: 'Product_id deve ser um número inteiro' })
  @Min(1, { message: 'Product_id deve ser maior que 0' })
  product_id: number;

  @IsInt({ message: 'Quantity deve ser um número inteiro' })
  @Min(1, { message: 'Quantity deve ser maior que 0' })
  quantity: number;

  @IsInt({ message: 'Width_mm deve ser um número inteiro' })
  @Min(1, { message: 'Width_mm deve ser maior que 0' })
  width_mm: number;

  @IsInt({ message: 'Height_mm deve ser um número inteiro' })
  @Min(1, { message: 'Height_mm deve ser maior que 0' })
  height_mm: number;

  @IsInt({ message: 'Depth_mm deve ser um número inteiro' })
  @Min(1, { message: 'Depth_mm deve ser maior que 0' })
  depth_mm: number;
}
