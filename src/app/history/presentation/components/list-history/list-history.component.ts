import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HistoryEntity } from 'src/app/history/domain/history-entity';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;
  @Input() listHistory: HistoryEntity[];
  @Input() total: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();
  dataTable;

  metadataTable: MetadataTable[] = [
    { field: 'dateRequest', title: 'Fecha Requisición' },
    { field: 'contractor', title: 'Contratante' },
    { field: 'policy', title: 'Política' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastName', title: 'Apellido' },
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listHistory.currentValue) {
      this.dataTable = changes.listHistory.currentValue;
    }
  }

  execute(action: string) {
    console.log(action);
  }

  ngAfterViewInit() {
    this.matPaginator.page.subscribe((status) => {
      this.onChangePage.emit(status.pageIndex);
    });
  }
}
