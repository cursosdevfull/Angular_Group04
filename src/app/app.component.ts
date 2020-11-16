import { Component, Injector } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userLogged = false;

  constructor(private readonly auth: AuthService) {
    this.auth
      .getChangeStatusUser()
      .subscribe((status: boolean) => (this.userLogged = status));
  }
}
