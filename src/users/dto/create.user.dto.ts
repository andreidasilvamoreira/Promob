import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enums/user.role.enum';

export class CreateUserDto {
  @IsString({ message: 'Username deve ser uma string' })
  @IsNotEmpty({ message: 'Username é obrigatório' })
  @MinLength(3, { message: 'Username deve ter no mínimo 3 caracteres' })
  username: string;

  @IsEmail({}, { message: 'Email deve ser válido' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @IsString({ message: 'Password deve ser uma string' })
  @IsNotEmpty({ message: 'Password é obrigatório' })
  @MinLength(6, { message: 'Password deve ter no mínimo 6 caracteres' })
  password: string;

  @IsEnum(UserRole, {
    message: 'Role deve ser ADMIN ou USER',
  })
  role: UserRole;
}
