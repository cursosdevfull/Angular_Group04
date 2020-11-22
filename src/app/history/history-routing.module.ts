import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHistoryComponent } from './presentation/page-history/page-history.component';

const routes: Routes = [{ path: '', component: PageHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
