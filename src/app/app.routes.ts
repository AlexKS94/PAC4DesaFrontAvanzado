import { Routes } from '@angular/router';
import { PlantsDetailComponent } from './pages/plants-detail/plants-detail.component';
import { PlantsListComponent } from './pages/plants-list/plants-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'plants', pathMatch: 'full' },
  { path: 'plants', component: PlantsListComponent },
  { path: 'plants/:id', component: PlantsDetailComponent },
];
