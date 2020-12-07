import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/auth.interface';
import { Tokens } from '../interfaces/tokens.interface';
import { UserEntity } from '../user/domain/user-entity';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuth {
  private onChangeStatusUser = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private readonly storage: StorageService,
    private readonly router: Router
  ) {}

  userLogged = false;

  login(user: UserEntity): void {
    this.http
      .post(`${environment.PATH_API}/auth/login`, user)
      .pipe(pluck('result'))
      .subscribe((data: Tokens) => {
        this.storage.save('accessToken', data.accessToken);
        this.storage.save('refreshToken', data.refreshToken);
        this.userLogged = true;
        this.onChangeStatusUser.next(true);
        this.router.navigate(['dashboard']);
      });
  }

  logout(): void {
    this.userLogged = false;
    this.storage.clear();
    this.onChangeStatusUser.next(false);
    this.router.navigate(['/']);
  }

  getChangeStatusUser(): Observable<boolean> {
    return this.onChangeStatusUser.asObservable();
  }

  getStatusUser(): boolean {
    const refreshToken = this.storage.get('refreshToken');
    if (this.userLogged || refreshToken) {
      return true;
    }

    return false;
  }
}
