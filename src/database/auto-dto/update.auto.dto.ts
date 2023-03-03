import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { User } from '../entities/user.entity';

export class updateAutoDTO {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  model: string;

  @IsOptional()
  @IsDate()
  release: Date;

  @IsOptional()
  owner: User;
}
