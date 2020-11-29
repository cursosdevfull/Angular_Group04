import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { PageMedicComponent } from './presentation/page-medic/page-medic.component';
import { SharedModule } from '../shared/shared.module';
import { ListMedicComponent } from './presentation/components/list-medic/list-medic.component';
import { FormMedicComponent } from './presentation/components/form-medic/form-medic.component';

@NgModule({
  declarations: [PageMedicComponent, ListMedicComponent, FormMedicComponent],
  imports: [CommonModule, MedicRoutingModule, SharedModule],
})
export class MedicModule {}
