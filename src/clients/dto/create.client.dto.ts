import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @MinLength(3, {
    message: 'Nome deve ter no mínimo 3 caracteres',
  })
  name: string;

  @IsString({ message: 'Phone deve ser uma string' })
  @IsOptional()
  phone: string;

  @IsEmail({}, { message: 'Email deve ser válido' })
  @IsOptional()
  email: string;

  @IsString({ message: 'Notes deve ser uma string' })
  @IsOptional()
  notes: string;

  @IsInt({ message: 'User_id deve ser um número inteiro' })
  @Min(1, { message: 'user_id deve ser maior que 0' })
  user_id: number;
}
