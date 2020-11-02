import { UserEntity } from '../domain/user-entity';
import { UserRepository } from '../domain/user-repository';

export class InsertUserCaseUse {
  constructor(private readonly userRepository: UserRepository) {}

  insertUser(user: UserEntity): void {
    this.userRepository.insert(user);
  }
}
