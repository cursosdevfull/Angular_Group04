import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PageHistoryComponent } from './presentation/page-history/page-history.component';
import { SharedModule } from '../shared/shared.module';
import { ListHistoryComponent } from './presentation/components/list-history/list-history.component';
import { PageEditHistoryComponent } from './presentation/page-edit-history/page-edit-history.component';
import { FormHistoryComponent } from './presentation/components/form-history/form-history.component';
import { HistoryResolve } from './infraestructure/history.resolve';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PageHistoryComponent,
    ListHistoryComponent,
    PageEditHistoryComponent,
    FormHistoryComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [HistoryResolve],
})
export class HistoryModule {}
