import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ExportCaseUse } from '../../caseuses/export.caseuse';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data,
    private readonly exportCaseUse: ExportCaseUse
  ) {}

  ngOnInit(): void {}

  export(evt: MouseEvent, option: string, action: string = '') {
    evt.preventDefault();
    if (option === 'excel') {
      this.exportCaseUse.exportToExcel(
        this.data.content,
        'Lista de médicos',
        'Médicos',
        this.data.dto
      );
    } else if (option === 'pdf') {
      this.exportCaseUse.exportToPDF(
        this.data.content,
        'Lista de médicos',
        'Médicos',
        this.data.dto,
        action
      );
    }
  }
}
