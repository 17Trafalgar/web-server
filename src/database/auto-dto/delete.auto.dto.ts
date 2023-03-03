import { IsNotEmpty } from 'class-validator';

export class deleteAutoDTO {
  @IsNotEmpty()
  id: number;
}
