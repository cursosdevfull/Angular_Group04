import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UtilService } from '../services/util.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: StorageService,
    private readonly injector: Injector,
    private readonly util: UtilService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }

    const accessToken = this.storage.get('accessToken');

    const requestClone = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    const authService = this.injector.get(AuthService);

    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
        } else if (error.status === 401) {
          return authService.getNewAccessToken().pipe(
            retry(3),
            mergeMap((response: any) => {
              this.storage.save('accessToken', response.accessToken);

              const newRequestClone = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });

              return next.handle(newRequestClone);
            })
          );
        } else if (error.status === 409) {
          authService.logout();
        } else {
          if (error.error && error.error.result) {
            if (error.status === 404) {
              this.util.showMessage(error.error.result);
            }

            return throwError(error.error.result);
          }
        }
      })
    );
  }
}
