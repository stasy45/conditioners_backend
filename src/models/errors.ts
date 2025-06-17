import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Unique('error', ['code'])
@Entity()
export class Errors {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  type: string;

  @Column()
  code: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}
