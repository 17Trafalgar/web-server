import { IsNotEmpty } from 'class-validator';

export class deleteUserDTO {
  @IsNotEmpty()
  id: number;
}
