import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Conditioners } from "./conditioners";


@Entity()
export class ControlParams {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Conditioners, conditioner => conditioner.id, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conditioner_id' })  // имя колонки в базе
  conditioner: Conditioners;

  @Column()
  work_mode: number;

  @Column()
  target_temp: number;

  @Column()
  speed_fan: number;

  @Column()
  temp_in_air: number;

  @CreateDateColumn({ type: 'timestamp' })
  received_date: Date;
}
