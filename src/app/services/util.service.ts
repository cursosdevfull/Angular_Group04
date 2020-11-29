import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private readonly dialog: MatDialog) {}

  openModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number }
  ): Observable<any> {
    const reference: MatDialogRef<typeof classComponent> = this.dialog.open(
      classComponent,
      options
    );

    return reference.afterClosed();
  }
}
