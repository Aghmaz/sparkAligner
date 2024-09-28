import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ type: 'varchar', length: 255 })
  Name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  Email: string;

  @Column({ type: 'varchar', length: 255 })
  Password: string;

  @Column({ type: 'date' })
  DOB: Date;

  @Column({ type: 'varchar', length: 50 })
  NationalID: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ProfilePicture: string;

  @Column({ type: 'enum', enum: ['Patient', 'Agent', 'Supervisor', 'Doctor'] })
  UserType: string;
}
