import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appUpload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  @HostListener('dragover', ['$event']) arrastre(evt) {
    evt.preventDefault();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) fuera(evt) {
    evt.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) soltar(evt) {
    evt.preventDefault();
    this.onHover.emit(false);
  }
}
