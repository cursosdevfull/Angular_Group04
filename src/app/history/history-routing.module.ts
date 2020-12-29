import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryResolve } from './infraestructure/history.resolve';
import { PageEditHistoryComponent } from './presentation/page-edit-history/page-edit-history.component';
import { PageHistoryComponent } from './presentation/page-history/page-history.component';

const routes: Routes = [
  { path: '', component: PageHistoryComponent },
  {
    path: 'new',
    component: PageEditHistoryComponent,
  },
  {
    path: ':id',
    component: PageEditHistoryComponent,
    resolve: {
      history: HistoryResolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
