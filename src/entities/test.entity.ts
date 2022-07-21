import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Test {
  @PrimaryGeneratedColumn()
  id: string;

  // @Column()
  // new_user: number;

  // @Column()
  // new_store: number;
}
