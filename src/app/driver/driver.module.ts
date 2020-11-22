import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { PageDriverComponent } from './presentation/page-driver/page-driver.component';
import { SharedModule } from '../shared/shared.module';
import { ListDriverComponent } from './components/list-driver/list-driver.component';

@NgModule({
  declarations: [PageDriverComponent, ListDriverComponent],
  imports: [CommonModule, DriverRoutingModule, SharedModule],
})
export class DriverModule {}
