import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Conditioners } from "./conditioners";


@Entity()
export class DiagnosticParams {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Conditioners, conditioner => conditioner.id, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conditioner_id' })  // имя колонки в базе
  conditioner: Conditioners;

  @Column()
  voltage: number;

  @Column()
  rotations: number;

  @Column()
  pwm_condenser: number;

  @Column()
  pwm_compressor: number;

  @Column()
  pwm_current_fan: number;

  @Column()
  amperage_condenser: number;

  @Column()
  amperage_compressor: number;

  @Column()
  temp_board: number;

  @Column()
  temp_vapor: number;

  @CreateDateColumn({ type: 'timestamp' })
  received_date: Date;
}
