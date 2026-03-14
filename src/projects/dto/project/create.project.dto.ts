import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProjectDto {
  @IsString({ message: 'Name deve ser uma string' })
  @IsNotEmpty({ message: 'Name é obrigatório' })
  @MinLength(3, {
    message: 'Name deve ter no mínimo 3 caracteres',
  })
  name: string;

  @IsInt({ message: 'User_id deve ser um número inteiro' })
  @Min(1, { message: 'User_id deve ser maior que 0' })
  user_id: number;

  @IsInt({ message: 'Client_id deve ser um número inteiro' })
  @Min(1, { message: 'Client_id deve ser maior que 0' })
  client_id: number;

  @IsString({ message: 'Description deve ser uma string' })
  @IsOptional()
  description?: string;
}
