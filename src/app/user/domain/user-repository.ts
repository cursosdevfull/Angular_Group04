import { UserEntity } from './user-entity';

export abstract class UserRepository {
  abstract insert(user: UserEntity): UserEntity;
  abstract update(id: number | string, user: UserEntity): UserEntity;
  abstract getAll(): UserEntity[];
  abstract getOne(id: number | string): UserEntity;
  abstract delete(id: number | string): UserEntity;
}
