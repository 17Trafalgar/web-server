import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { User } from '../entities/user.entity';

export class createAutoDTO {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  release: Date;

  @IsOptional()
  owner: User;
}
