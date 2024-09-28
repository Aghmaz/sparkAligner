import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('teeth_picture')
export class TeethPicture {
  @PrimaryGeneratedColumn()
  PictureID: number;

  @Column({ type: 'int' })
  UserID: number;

  @Column({ type: 'datetime' })
  UploadDate: Date;

  @Column({ type: 'varchar', length: 255 })
  FilePath: string;

  @Column({ type: 'enum', enum: ['Uploaded', 'Deleted'] })
  Status: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;
}
