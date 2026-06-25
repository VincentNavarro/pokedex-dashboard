import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { DetailComponent } from './pages/detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'pokemon/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
