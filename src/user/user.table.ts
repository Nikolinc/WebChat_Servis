import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserTableType } from './type/user.interface';

@Table({ tableName: 'user' })
export class User extends Model<User, UserTableType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  nickname: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING })
  numberPhone: string;

  @Column({ type: DataType.STRING })
  firstname: string;

  @Column({ type: DataType.STRING })
  lastname: string;

  @Column({ type: DataType.BOOLEAN })
  isActive: boolean;

  @Column({ type: DataType.DATE })
  dateOfBirth: Date;

  @Column({ type: DataType.DATE })
  lastLoginDate: Date;

  @Column({ type: DataType.STRING })
  imageAvatar: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  listImage: string[];

  @Column({ type: DataType.STRING })
  password: string;
}
