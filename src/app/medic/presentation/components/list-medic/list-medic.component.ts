import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';
import { MedicEntity } from 'src/app/medic/domain/medic-entity';
import { UtilService } from 'src/app/services/util.service';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit, OnChanges {
  @Input() listMedic: MedicEntity[];
  @Output() onEdit: EventEmitter<MedicEntity> = new EventEmitter<MedicEntity>();
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  dataTable;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listMedic.currentValue) {
      this.dataTable = changes.listMedic.currentValue;
    }
  }

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

  edit(row: MedicEntity) {
    this.onEdit.emit(row);
    // this.openModal({ name: 'Marcela' });
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
