import { Component, OnInit } from '@angular/core';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
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

  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'cloud_download',
      color: 'accent',
      action: 'EXPORT',
      tooltip: 'EXPORTAR LISTA',
    },
    { icon: 'add', color: 'primary', action: 'NEW', tooltip: 'AGREGAR MÉDICO' },
  ];

  constructor() {}

  ngOnInit(): void {}

  execute(action: string) {
    console.log(action);
  }
}
