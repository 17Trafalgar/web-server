import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Auto } from './auto.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  phone: number;

  @Column('varchar')
  email: string;

  @OneToMany(() => Auto, (auto) => auto.owner)
  auto: Auto[];
}
