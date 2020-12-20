import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicEntity } from 'src/app/medic/domain/medic-entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string = '';
  mouseOver = false;
  imageSelected: File;
  group: FormGroup;

  @ViewChild('contentPhoto') contentPhoto: ElementRef;
  @ViewChild('uploadImage') uploadImage: ElementRef;

  constructor(
    private readonly reference: MatDialogRef<FormMedicComponent>,
    @Inject(MAT_DIALOG_DATA) private data: MedicEntity
  ) {}

  ngOnInit(): void {
    this.title = this.data ? 'Edición' : 'Nuevo';
    this.group = new FormGroup({
      name: new FormControl(this.data?.name, Validators.required),
      surname: new FormControl(this.data?.surname, Validators.required),
      lastname: new FormControl(this.data?.lastname, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
      //locations: new FormControl(['LIMA', 'TRUJILLO']),
    });
  }

  ngAfterViewInit() {
    // https://angular03.cursos-dev.com/photos/1607874643766.jpeg
    if (this.data && this.data.photo) {
      this.loadPhoto(`${environment.PATH_API}/photos/${this.data.photo}`);
    }
  }

  save() {
    if (this.group.valid) {
      const fd = new FormData();
      const values = this.group.value;
      for (const property in values) {
        fd.append(property, values[property]);
      }

      fd.append('locations', '5f6a889d43a4415f74856b12');
      fd.append('locations', '5f6a88ab43a4415f74856b13');

      if (this.imageSelected) {
        fd.append('photo', this.imageSelected);
      }

      const dataMedic = {
        fd,
        id: this.data ? this.data._id : null,
      };

      this.reference.close(dataMedic);
    }
  }

  selectedImage(imageList: File[]) {
    this.imageSelected = imageList[0];
    const fr: FileReader = new FileReader();
    fr.onloadend = (response) => {
      const dataBase64 = response.target.result;
      this.loadPhoto(dataBase64);
    };

    fr.readAsDataURL(this.imageSelected);
  }

  loadPhoto(image: string | ArrayBuffer) {
    this.contentPhoto.nativeElement.style.backgroundImage = `url(${image})`;
  }

  loadImage() {
    this.uploadImage.nativeElement.click();
  }

  upload(evt) {
    const files: File[] = [];
    files.push(evt.target.files[0]);
    this.selectedImage(files);
  }
}
