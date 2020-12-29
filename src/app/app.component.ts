import { Component, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userLogged = false;

  constructor(
    private readonly auth: AuthService,
    private readonly translate: TranslateService
  ) {
    this.userLogged = this.auth.getStatusUser();
    this.auth
      .getChangeStatusUser()
      .subscribe((status: boolean) => (this.userLogged = status));

    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const languageBrowser = this.translate.getBrowserLang();
    const lang = languageBrowser.match(/es|en/) ? languageBrowser : 'es';
    this.translate.use(lang);
  }
}
