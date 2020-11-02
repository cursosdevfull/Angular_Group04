import { Injectable } from '@angular/core';
import { UserEntity } from '../domain/user-entity';
import { UserRepository } from '../domain/user-repository';

@Injectable({
  providedIn: 'root',
})
export class UserOperations extends UserRepository {
  constructor() {
    super();
  }

  insert(user: UserEntity): UserEntity {
    throw new Error('Method not implemented.');
  }
  update(id: string | number, user: UserEntity): UserEntity {
    throw new Error('Method not implemented.');
  }
  getAll(): UserEntity[] {
    throw new Error('Method not implemented.');
  }
  getOne(id: string | number): UserEntity {
    throw new Error('Method not implemented.');
  }
  delete(id: string | number): UserEntity {
    throw new Error('Method not implemented.');
  }
}
