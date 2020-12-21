import { Injectable } from '@angular/core';
import { ExportRepository } from '../repositories/export.repository';
import { IExportRepository } from './export.repository';
@Injectable()
export class ExportCaseUse {
  constructor(private readonly exportService: ExportRepository) {}

  mappingData(content: any[], dto: IExportRepository): any[] {
    return dto.mapping(content);
  }

  exportToExcel(
    content: any[],
    sheetName: string,
    bookName: string,
    dto: IExportRepository
  ) {
    const dataToExport = this.mappingData(content, dto);
    this.exportService.exportToExcel(dataToExport, sheetName, bookName);
  }

  exportToPDF(
    content: any[],
    title: string,
    fileName: string,
    dto: IExportRepository,
    action: string
  ) {
    const dataToExport = this.mappingData(content, dto);
    this.exportService.exportToPDF(dataToExport, title, fileName, action);
  }
}
