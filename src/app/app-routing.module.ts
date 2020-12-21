import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  {
    path: 'histories',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'medics',
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
