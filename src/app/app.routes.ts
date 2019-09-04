import { Routes } from '@angular/router';
import { TrainingListRoutComponentComponent } from './trainings-module/training-list-rout-component/training-list-rout-component.component';
import {TrainingDetailsRouteComponentComponent} from "src/app/trainings-module/training-details-route-component/training-details-route-component.component"
 
export const routes: Routes = [
  { path: 'training', component: TrainingListRoutComponentComponent },
  {
    path: 'training/:id',
    component: TrainingDetailsRouteComponentComponent
  },
  { path: '**', redirectTo: '/training' }
];