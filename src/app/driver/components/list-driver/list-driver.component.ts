import { Component, OnInit } from '@angular/core';
import { MetadataOverride } from '@angular/core/testing';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent implements OnInit {
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

  /*   columnsToView = ['name', 'lastname']; */

  constructor() {}

  ngOnInit(): void {}
}
