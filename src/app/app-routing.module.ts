import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/page-login/page-login.component';
import { PageDashboardComponent } from './dashboard/presentation/page-dashboard/page-dashboard.component';

// Routes   [{path: ..., component: ..., canActivated, canActivatedChildren: ..., childre: ...}]

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
