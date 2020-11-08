import { Injectable } from '@angular/core';
import { UserEntity } from '../domain/user-entity';
import { UserRepository } from '../domain/user-repository';

@Injectable({
  providedIn: 'root',
})
export class UserCaseUse {
  constructor(private readonly userRepository: UserRepository) {}

  login(user: UserEntity) {
    this.userRepository.login(user);
  }

  insertUser(user: UserEntity): void {
    this.userRepository.insert(user);
  }
}
