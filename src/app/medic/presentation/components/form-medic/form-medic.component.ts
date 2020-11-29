import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
})
export class FormMedicComponent implements OnInit {
  constructor(private readonly reference: MatDialogRef<FormMedicComponent>) {}

  ngOnInit(): void {}

  save() {
    const datos = ['a', 'b', 'c'];
    this.reference.close(datos);
  }
}
