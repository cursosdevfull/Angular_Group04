import { Component, OnInit } from '@angular/core';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  dataTable = [
    { name: 'Alfonso', lastname: 'Correa' },
    { name: 'Javier', lastname: 'Angulo' },
    { name: 'Mónica', lastname: 'Pedraza' },
    { name: 'Aida', lastname: 'Pérez' },
  ];

  metadataTable: MetadataTable[] = [
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
