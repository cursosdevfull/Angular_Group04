import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEntity } from 'src/app/user/domain/user-entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnChanges {
  @Output() outputLogin: EventEmitter<UserEntity> = new EventEmitter<
    UserEntity
  >();
  group: FormGroup;

  constructor() {
    console.log('Se ejecuta el constructor');
  }

  ngOnChanges() {
    console.log('Se ejecuta el ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Se ejecuta el ngOnInit');
    this.initializeForm();
  }

  initializeForm() {
    this.group = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    const user: UserEntity = this.group.value;
    this.outputLogin.emit(user);
  }

  capturar(value) {
    //this.email = value;
    console.log(value);
  }
}
