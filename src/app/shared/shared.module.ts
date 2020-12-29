import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ExportComponent } from './components/export/export.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { ErrorFormDirective } from './directives/error-form.directive';
import { ErrorControlDirective } from './directives/error-control.directive';
import { UploadDirective } from './directives/upload.directive';
import { ExportCaseUse } from './caseuses/export.caseuse';
import { ReducePipe } from './pipes/reduce.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    SubtitleComponent,
    ContainerComponent,
    TableComponent,
    KeypadComponent,
    ConfirmComponent,
    ExportComponent,
    ErrorFormDirective,
    ErrorControlDirective,
    UploadDirective,
    ReducePipe,
    RolesAllowedDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatPaginatorModule,
  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatPaginatorModule,
    SubtitleComponent,
    ContainerComponent,
    TableComponent,
    KeypadComponent,
    ConfirmComponent,
    ExportComponent,
    PerfectScrollbarModule,
    ErrorFormDirective,
    ErrorFormDirective,
    ErrorControlDirective,
    UploadDirective,
    ReducePipe,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    RolesAllowedDirective,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ExportCaseUse,
  ],
})
export class SharedModule {}
