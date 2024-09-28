import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  Name?: string;

  @IsOptional()
  @IsEmail()
  Email?: string;

  @IsOptional()
  @IsString()
  @Length(8)
  Password?: string;

  @IsOptional()
  @IsString()
  DOB?: string;

  @IsOptional()
  @IsString()
  NationalID?: string;

  @IsOptional()
  @IsString()
  ProfilePicture?: string;

  @IsOptional()
  @IsEnum(['Patient', 'Agent', 'Supervisor', 'Doctor'])
  UserType?: 'Patient' | 'Agent' | 'Supervisor' | 'Doctor';
}
