import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stocks')
class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;
}

export default Stock;
