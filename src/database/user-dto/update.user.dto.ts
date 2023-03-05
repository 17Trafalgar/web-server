import {
  IsEmail,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class updateUserDTO {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsOptional()
  @IsEmail()
  email: string;
}
