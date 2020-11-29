import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PageHistoryComponent } from './presentation/page-history/page-history.component';
import { SharedModule } from '../shared/shared.module';
import { ListHistoryComponent } from './presentation/components/list-history/list-history.component';

@NgModule({
  declarations: [PageHistoryComponent, ListHistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
