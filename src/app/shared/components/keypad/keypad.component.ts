import { Component, Input, OnInit, Output } from '@angular/core';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css'],
})
export class KeypadComponent implements OnInit {
  @Input() keypadButtons: KeyPadButton[];
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  action(act: string) {
    this.clickButton.emit(act);
  }
}
