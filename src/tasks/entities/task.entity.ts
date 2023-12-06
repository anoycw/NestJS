import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskName_en: string;

  @Column()
  taskName_bn: string;

  @Column({ default: true })
  isChecked: boolean;
}
