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
import { Observable, Subject } from 'rxjs';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';
import { DtoMedicExport } from 'src/app/medic/application/medic-export.dto';
import { MedicEntity } from 'src/app/medic/domain/medic-entity';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit, OnChanges {
  @Input() listMedic: MedicEntity[];
  @Output() onActionForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: Subject<string> = new Subject<string>();
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  dataTable;

  metadataTable: Partial<MetadataTable>[] = [
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
      this.actionForm();
      // this.openModal();
    } else if (action === 'EXPORT') {
      this.openSheet();
    }
  }

  delete(row: MedicEntity) {
    const response: Observable<any> = this.util.confirm(
      '¿Está seguro de eliminar?'
    );

    response.subscribe((response) => {
      this.onDelete.next(row._id);
    });
  }

  actionForm(row: MedicEntity = null) {
    this.onActionForm.emit(row);
  }

  openSheet() {
    const dto = new DtoMedicExport();
    this.util.openSheet(this.dataTable, dto);
  }
}
