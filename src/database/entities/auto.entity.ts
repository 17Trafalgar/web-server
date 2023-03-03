import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Auto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  brand: string;

  @Column('varchar')
  model: string;

  @Column('date')
  release: Date;

  @ManyToOne(() => User, (user) => user.auto)
  owner: User;
}
