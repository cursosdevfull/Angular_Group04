import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formGroup]',
})
export class ErrorFormDirective {
  @Input() formGroup: FormGroup;

  @HostListener('submit') submit() {
    this.maskAsTouched();
  }

  private maskAsTouched() {
    for (const control in this.formGroup.controls) {
      if (this.formGroup.controls[control]) {
        this.formGroup.controls[control].updateValueAndValidity();
      }
    }
  }
}
