import {
  IsEmail,
  IsString,
  IsInt,
  IsBoolean,
  IsDateString,
  IsArray,
} from 'class-validator';
import { UserTableType } from '../type/user.interface';

export class CreateUserDto implements UserTableType {
  @IsInt()
  id: number;

  @IsString()
  nickname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  numberPhone: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsBoolean()
  isActive: boolean;

  @IsDateString()
  dateOfBirth: Date;

  @IsDateString()
  lastLoginDate: Date;

  @IsString()
  imageAvatar: string;

  @IsArray()
  listImage: string[];

  @IsString()
  password: string;
}
