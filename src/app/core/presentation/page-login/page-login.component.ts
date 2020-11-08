import { Component, OnInit } from '@angular/core';
import { UserCaseUse } from 'src/app/user/application/user.caseuse';
import { UserEntity } from 'src/app/user/domain/user-entity';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private userCaseUse: UserCaseUse) {}

  ngOnInit(): void {}

  setCredentials(user: UserEntity) {
    this.userCaseUse.login(user);
  }
}
