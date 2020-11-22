import { Component, OnInit } from '@angular/core';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  dataTable = [
    { name: 'Alfonso', lastname: 'Correa', location: 'San Borja' },
    { name: 'Javier', lastname: 'Angulo', location: 'San Juan de Miraflores' },
    { name: 'Mónica', lastname: 'Pedraza', location: 'Comas' },
    { name: 'Aida', lastname: 'Pérez', location: 'Lince' },
  ];

  metadataTable: MetadataTable[] = [
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
    { field: 'location', title: 'Localidad' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
