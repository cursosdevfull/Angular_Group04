import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';
import { UtilService } from 'src/app/services/util.service';
import { FormMedicComponent } from '../form-medic/form-medic.component';

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

  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'cloud_download',
      color: 'accent',
      action: 'EXPORT',
      tooltip: 'EXPORTAR LISTA',
    },
    { icon: 'add', color: 'primary', action: 'NEW', tooltip: 'AGREGAR MÉDICO' },
  ];

  constructor(private readonly util: UtilService) {}

  ngOnInit(): void {}

  execute(action: string) {
    if (action === 'NEW') {
      this.openModal();
    } else if (action === 'EXPORT') {
      this.openSheet();
    }
  }

  delete() {
    const response: Observable<any> = this.util.confirm(
      '¿Está seguro de eliminar?'
    );

    response.subscribe((response) => console.log('response', response));
  }

  edit() {
    this.openModal({ name: 'Marcela' });
  }

  openModal(record: any = null) {
    const options = {
      disableClose: true,
      panelClass: 'container-form',
      data: record,
    };

    const reference: Observable<any> = this.util.openModal(
      FormMedicComponent,
      options
    );
    reference.subscribe((response) => {
      if (response) {
        this.util.showMessage('Datos guardados');
      }
    });
  }

  openSheet() {
    this.util.openSheet();
  }
}
