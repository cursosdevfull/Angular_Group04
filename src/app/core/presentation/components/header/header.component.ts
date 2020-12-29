import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserCaseUse } from 'src/app/user/application/user.caseuse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;
  constructor(
    private readonly userCase: UserCaseUse,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title = environment.TITLE_APP;
  }

  logout() {
    this.userCase.logout();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
