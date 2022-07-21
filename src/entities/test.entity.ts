import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report')
export class Report {
  @PrimaryGeneratedColumn()
  month: number;

  @Column()
  new_user: number;

  @Column()
  new_store: number;
}

@Entity('order_detail')
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column()
  name: string;

  @Column('text', { array: true })
  images: string[];

  @Column({ type: 'decimal' })
  price: number;

  @Column()
  quantity: number;
}