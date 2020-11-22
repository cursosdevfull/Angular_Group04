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
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [SubtitleComponent, ContainerComponent, TableComponent],
  imports: [CommonModule, MatCardModule, FlexLayoutModule, MatTableModule],
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
    SubtitleComponent,
    ContainerComponent,
    TableComponent,
  ],
})
export class SharedModule {}
