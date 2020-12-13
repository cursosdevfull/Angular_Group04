import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

FileList.prototype['forEach'] = function (callback) {
  [].forEach.call(this, callback);
};
@Directive({
  selector: '[appUpload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() onUploadedFiles: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() onUploadedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();
  // @Input() mimetypesAllowed = '';
  @Input('appUpload') mimetypesAllowed = '';

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

    const filesAllowed = [];
    const listFiles: FileList = evt.dataTransfer.files;
    const allowed = this.mimetypesAllowed.split(',');
    listFiles['forEach']((file: File) => {
      if (allowed.indexOf(file.type) > -1) {
        filesAllowed.push(file);
      }
    });

    if (filesAllowed.length > 0) {
      // this.onUploadedFiles.emit(evt.dataTransfer.files);
      this.onUploadedFiles.emit(filesAllowed);
    }
  }
}
