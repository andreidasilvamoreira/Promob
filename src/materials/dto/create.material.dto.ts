import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateMaterialDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @MinLength(3, {
    message: 'Nome deve ter no mínimo 3 caracteres',
  })
  name: string;

  @IsString({ message: 'Type deve ser uma string' })
  @IsNotEmpty({ message: 'Type é obrigatório' })
  type: string;

  @IsString({ message: 'Unit deve ser uma string' })
  @IsNotEmpty({ message: 'Unit é obrigatório' })
  unit: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'Price deve ser um número com até 2 casas decimais',
    },
  )
  price: number;

  @IsInt({ message: 'User_id deve ser um número inteiro' })
  @Min(1, { message: 'user_id deve ser maior que 0' })
  user_id: number;
}
