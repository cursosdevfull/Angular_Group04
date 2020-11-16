import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserEntity } from '../domain/user-entity';
import { UserRepository } from '../domain/user-repository';

@Injectable({
  providedIn: 'root',
})
export class UserCaseUse {
  constructor(
    private readonly auth: AuthService,
    private readonly userRepository: UserRepository
  ) {}

  login(user: UserEntity) {
    this.auth.login(user);
  }

  logout() {
    this.auth.logout();
  }

  insertUser(user: UserEntity): void {
    this.userRepository.insert(user);
  }
}
