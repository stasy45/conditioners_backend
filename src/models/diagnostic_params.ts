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
  measured_speed_compressor: number;

  @Column()
  pwm_condenser: number;

  @Column()
  pwm_compressor: number;

  @Column()
  actual_fan_pwm_evap: number;

  @Column()
  current_condensor: number;

  @Column()
  current_compressor: number;

  @Column()
  temp_plate: number;

  @Column()
  temp_evap: number;

  @CreateDateColumn({ type: 'timestamp' })
  received_date: Date;
}
