import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @MinLength(3, {
    message: 'Nome deve ter no mínimo 3 caracteres',
  })
  name: string;

  @IsString({ message: 'Category deve ser uma string' })
  @IsOptional()
  category: string;

  @IsString({ message: 'Description deve ser uma string' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'User_id deve ser um número inteiro' })
  @Min(1, { message: 'user_id deve ser maior que 0' })
  user_id: number;
}
