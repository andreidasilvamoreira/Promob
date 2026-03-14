import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateEstimateDto {
  @IsInt({ message: 'Project_id deve ser um número inteiro' })
  @Min(1, { message: 'Project_id deve ser maior que 0' })
  project_id: number;

  @IsInt({ message: 'Version deve ser um número inteiro' })
  @Min(1, { message: 'Version deve ser maior que 0' })
  version: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'Total_material_cost deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Total_material_cost não pode ser menor que 0',
  })
  total_material_cost: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Margin_percent deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Margin_percent não pode ser menor que 0',
  })
  margin_percent: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Total_price deve ser um número com até 2 casas decimais',
    },
  )
  @Min(0, {
    message: 'Total_price não pode ser menor que 0',
  })
  total_price: number;
}
