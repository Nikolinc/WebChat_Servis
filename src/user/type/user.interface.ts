export interface UserTableType {
  id: number;
  nickname: string;
  email: string;
  numberPhone: string;
  firstname: string;
  lastname: string;
  isActive: boolean;
  dateOfBirth: Date;
  lastLoginDate: Date;
  imageAvatar: string;
  listImage: string[];
  password: string;
}
