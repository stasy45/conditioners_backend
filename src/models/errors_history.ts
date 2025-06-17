import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Conditioners } from './conditioners';
import { Errors } from './errors';


@Entity()
export class ErrorsHistory {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Conditioners, conditioner => conditioner.id, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conditioner_id' })  // имя колонки в базе
  conditioner: Conditioners;

  @ManyToOne(() => Errors, error => error.id, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'error_id' })  // имя колонки в базе
  error: Errors;

  @CreateDateColumn({ type: 'timestamp' })
  received_date: Date;
}
