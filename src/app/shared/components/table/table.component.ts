import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() dataTable: any[];
  @Input() metadataTable: MetadataTable[];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef) columnsDef: QueryList<MatColumnDef>;
  columnsToView: string[] = [];

  dataSource: any;

  constructor() {}

  ngOnChanges() {
    this.columnsToView = this.metadataTable.map(
      (el: MetadataTable) => el.field
    );
  }

  ngAfterContentInit() {
    this.dataSource = new MatTableDataSource<any>(this.dataTable);
    this.columnsDef.forEach((columnDef) => this.table.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.columnsToView.push('actions');
    }
  }

  ngOnInit(): void {}
}
