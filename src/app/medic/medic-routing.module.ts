import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMedicComponent } from './presentation/page-medic/page-medic.component';

const routes: Routes = [{ path: '', component: PageMedicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicRoutingModule {}
