import { Routes } from '@angular/router';
import { TrainingListRoutComponentComponent } from './trainings-module/training-list-rout-component/training-list-rout-component.component';

 
export const routes: Routes = [
  { path: 'training', component: TrainingListRoutComponentComponent },
  { path: '**', redirectTo: '/training' }
];