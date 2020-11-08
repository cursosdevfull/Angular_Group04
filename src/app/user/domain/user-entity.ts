export interface UserEntity {
  name?: string;
  email?: string;
  password?: string;
  isActive?: boolean;
  refreshToken?: string;
  roles?: string[];
}
