import { Component, Input, OnInit } from '@angular/core';
import { MetadataTable } from 'src/app/interfaces/metadata-table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() dataTable: any[];
  @Input() metadataTable: MetadataTable[];
  columnsToView: string[] = [];

  constructor() {}

  ngOnChanges() {
    this.columnsToView = this.metadataTable.map(
      (el: MetadataTable) => el.field
    );
  }

  ngOnInit(): void {}
}
