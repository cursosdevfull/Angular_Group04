import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicEntity } from 'src/app/medic/domain/medic-entity';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string = '';
  mouseOver = false;

  group: FormGroup;

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
    });
  }

  save() {
    if (this.group.valid) {
      const datos = ['a', 'b', 'c'];
      this.reference.close(datos);
    }
  }
}
