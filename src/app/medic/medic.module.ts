import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { PageMedicComponent } from './presentation/page-medic/page-medic.component';
import { SharedModule } from '../shared/shared.module';
import { ListMedicComponent } from './components/list-medic/list-medic.component';

@NgModule({
  declarations: [PageMedicComponent, ListMedicComponent],
  imports: [CommonModule, MedicRoutingModule, SharedModule],
})
export class MedicModule {}
