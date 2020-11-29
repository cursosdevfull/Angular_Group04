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
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { KeypadComponent } from './components/keypad/keypad.component';

@NgModule({
  declarations: [
    SubtitleComponent,
    ContainerComponent,
    TableComponent,
    KeypadComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
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
    SubtitleComponent,
    ContainerComponent,
    TableComponent,
    KeypadComponent,
  ],
})
export class SharedModule {}
