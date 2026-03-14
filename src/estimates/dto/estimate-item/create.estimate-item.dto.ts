import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateEstimateItemDto {
  @IsString({ message: 'Description deve ser uma string' })
  @IsOptional()
  description?: string;

  @IsInt({ message: 'Estimate_id deve ser um número inteiro' })
  @Min(1, { message: 'Estimate_id deve ser maior que 0' })
  estimate_id: number;

  @IsInt({ message: 'Project_item_id deve ser um número inteiro' })
  @Min(1, { message: 'Project_item_id deve ser maior que 0' })
  project_item_id: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Material_cost deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Material_cost não pode ser menor que 0',
  })
  material_cost: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Labor_cost deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Labor_cost não pode ser menor que 0',
  })
  labor_cost: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Total_cost deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Total_cost não pode ser menor que 0',
  })
  total_cost: number;
}
