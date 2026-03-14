import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductPartDto {
  @IsInt({ message: 'Product_id deve ser um número inteiro' })
  @Min(1, { message: 'Product_id deve ser maior que 0' })
  product_id: number;

  @IsInt({ message: 'Material_id deve ser um número inteiro' })
  @Min(1, { message: 'Material_id deve ser maior que 0' })
  material_id: number;

  @IsString({ message: 'Name deve ser uma string' })
  @IsNotEmpty({ message: 'Name é obrigatório' })
  @MinLength(3, {
    message: 'Name deve ter no mínimo 3 caracteres',
  })
  name: string;

  @IsInt({ message: 'Quantity deve ser um número inteiro' })
  @Min(1, { message: 'Quantity deve ser maior que 0' })
  quantity: number;

  @IsInt({ message: 'Width_mm deve ser um número inteiro' })
  @Min(1, { message: 'Width_mm deve ser maior que 0' })
  width_mm: number;

  @IsInt({ message: 'Height_mm deve ser um número inteiro' })
  @Min(1, { message: 'Height_mm deve ser maior que 0' })
  height_mm: number;

  @IsBoolean({ message: 'Edge_band deve ser verdadeiro ou falso' })
  @IsOptional()
  edge_band?: boolean;
}
