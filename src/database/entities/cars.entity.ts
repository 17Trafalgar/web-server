import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  brand: string;

  @Column({ length: 500 })
  model: string;

  @Column({ length: 500 })
  release: string;

  @Column({ length: 500 })
  owner: string;
}
