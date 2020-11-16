import { Component, OnInit } from '@angular/core';
import { UserCaseUse } from 'src/app/user/application/user.caseuse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly userCase: UserCaseUse) {}

  ngOnInit(): void {}

  logout() {
    this.userCase.logout();
  }
}
