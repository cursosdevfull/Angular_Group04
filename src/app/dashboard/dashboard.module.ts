import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/page-dashboard/page-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphicCovidComponent } from './presentation/components/graphic-covid/graphic-covid.component';
import { VaccumComponent } from './presentation/components/vaccum/vaccum.component';
import { CovidApiComponent } from './presentation/components/covid-api/covid-api.component';

@NgModule({
  declarations: [PageDashboardComponent, GraphicCovidComponent, VaccumComponent, CovidApiComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}
