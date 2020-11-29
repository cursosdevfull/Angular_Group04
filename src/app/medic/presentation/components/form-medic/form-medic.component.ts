import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string = '';

  constructor(
    private readonly reference: MatDialogRef<FormMedicComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data ? 'Edición' : 'Nuevo';
  }

  save() {
    const datos = ['a', 'b', 'c'];
    this.reference.close(datos);
  }
}
