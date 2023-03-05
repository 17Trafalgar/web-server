import { Type } from 'class-transformer';
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
  @Type(() => Date)
  @IsDate()
  release: Date;

  @IsOptional()
  owner: User;
}
