import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDriverComponent } from './presentation/page-driver/page-driver.component';

const routes: Routes = [{ path: '', component: PageDriverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
