import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const rolesUser = this.auth.getRoles();
    const rolesAllowed = route.data.rolesAllowed;

    let matchedRole = false;
    rolesUser.forEach((role) => {
      if (rolesAllowed.indexOf(role) > -1) {
        matchedRole = true;
      }
    });

    return matchedRole;
  }
}
