import { Directive, ElementRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';
import * as uuid from 'uuid';

@Directive({
  selector: '[formControlName], [formControl]',
})
export class ErrorControlDirective {
  errorSpanId = '';
  constructor(
    private readonly el: ElementRef,
    private readonly control: NgControl,
    private readonly errors: ErrorService
  ) {}

  ngOnInit() {
    this.errorSpanId = uuid.v4();
    this.control.statusChanges.subscribe((status) => {
      console.log(status);
      if (status === 'INVALID') {
        this.insertMessageError();
      } else {
        this.removeMessageError();
      }
    });
  }

  private insertMessageError() {
    this.removeMessageError();
    const valueErrors: ValidationErrors = this.control.errors;
    const firstError = Object.keys(valueErrors)[0];
    const errorMessage = this.errors.getMessage(firstError);

    const errSpan = `<span style="color:red;font-style:italic;font-size:11px;" id="${this.errorSpanId}">${errorMessage}</span>`;

    this.el.nativeElement.parentElement.insertAdjacentHTML(
      'beforeend',
      errSpan
    );
  }

  private removeMessageError() {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) {
      errorElement.remove();
    }
  }
}
