import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Unique('conditioner', ['serial_number'])
@Entity()
export class Conditioners {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  serial_number: string;
}
