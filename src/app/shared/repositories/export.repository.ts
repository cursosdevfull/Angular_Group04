export abstract class ExportRepository {
  abstract exportToExcel(
    content: any[],
    sheetName: string,
    bookName: string
  ): void;
  abstract exportToPDF(
    content: any[],
    title: string,
    fileName: string,
    action: string
  ): void;
}
