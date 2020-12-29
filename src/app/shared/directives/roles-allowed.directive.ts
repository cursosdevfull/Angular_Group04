import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[appRolesAllowed]',
})
export class RolesAllowedDirective {
  @Input() appRolesAllowed = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly auth: AuthService
  ) {}

  ngOnInit() {
    this.auth
      .getChangeStatusUser()
      .pipe(startWith(''))
      .subscribe(() => {
        this.execute();
      });
  }

  execute() {
    const userLogged = this.auth.getStatusUser();
    const rolesUser = this.auth.getRoles();
    const userWithRoleAllowed = this.hasUserAnyRoleAllowed(rolesUser);

    if (userLogged && userWithRoleAllowed && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!userLogged || (!userWithRoleAllowed && this.hasView)) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  hasUserAnyRoleAllowed(rolesUser) {
    let matched = false;
    rolesUser.forEach((roleUser) => {
      if (this.appRolesAllowed.indexOf(roleUser) > -1) {
        matched = true;
      }
    });

    return matched;
  }
}
