import { Observable } from 'rxjs';
import { UserEntity } from '../user/domain/user-entity';

export interface IAuth {
  login(user: UserEntity): void;
  getChangeStatusUser(): Observable<boolean>;
}
