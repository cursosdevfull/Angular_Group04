import { Component, OnInit } from '@angular/core';
import { UserCaseUse } from 'src/app/user/application/user.caseuse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;
  constructor(private readonly userCase: UserCaseUse) {}

  ngOnInit(): void {
    this.title = environment.TITLE_APP;
  }

  logout() {
    this.userCase.logout();
  }
}
