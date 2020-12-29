import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/page-login/page-login.component';
import { PageDashboardComponent } from './dashboard/presentation/page-dashboard/page-dashboard.component';
import { AuthorizationGuard } from './guards/authorization.guard';

// Routes   [{path: ..., component: ..., canActivated, canActivatedChildren: ..., childre: ...}]

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthorizationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR', 'MEDIC'],
    },
  },
  {
    path: 'histories',
    canActivate: [AuthorizationGuard],
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
  {
    path: 'drivers',
    canActivate: [AuthorizationGuard],
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
    data: {
      rolesAllowed: ['AUDIT'],
    },
  },
  {
    path: 'medics',
    canActivate: [AuthorizationGuard],
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
