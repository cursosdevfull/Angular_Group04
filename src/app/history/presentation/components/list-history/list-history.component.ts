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
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryEntity } from 'src/app/history/domain/history-entity';
import { HistoryRepository } from 'src/app/history/domain/history.repository';
import { KeyPadButton } from 'src/app/interfaces/keypad-button.interface';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';
import { UtilService } from 'src/app/services/util.service';

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
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  rolesAllowedDelete = ['MEDIC'];

  metadataTable: Partial<MetadataTable>[] = [
    {
      field: 'dateRequest',
      title: 'Fecha Requisición',
      pipe: { name: 'date', format: 'dd-MMM-yyyy' },
    },
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
    {
      icon: 'add',
      color: 'primary',
      action: 'NEW',
      tooltip: 'AGREGAR HISTORIA',
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly utilService: UtilService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listHistory.currentValue) {
      this.dataTable = changes.listHistory.currentValue;
    }
  }

  execute(action: string) {
    switch (action) {
      case 'NEW':
        this.router.navigate(['new'], { relativeTo: this.activatedRoute });
    }
  }

  ngAfterViewInit() {
    this.matPaginator.page.subscribe((status) => {
      this.onChangePage.emit(status.pageIndex);
    });
  }

  edit(id: string) {
    // this.router.navigate(['/histories', id]);
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  delete(id: string) {
    this.utilService
      .confirm('¿Está seguro de querer eliminar')
      .subscribe((response) => {
        if (response) {
          this.onDelete.emit(id);
        }
      });
  }
}
