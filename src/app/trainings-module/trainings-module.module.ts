import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponentComponent } from './trainings-component/trainings-component.component';
import { TrainingsDetailComponent } from './trainings-detail/trainings-detail.component';
import { FormsModule } from '@angular/forms';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import { TrainingListRoutComponentComponent } from './training-list-rout-component/training-list-rout-component.component';
import { TrainingDetailsRouteComponentComponent } from './training-details-route-component/training-details-route-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TrainingsComponentComponent, TrainingsDetailComponent, TakePlaceSoonPipe, TrainingListRoutComponentComponent, TrainingDetailsRouteComponentComponent],
  exports: [TrainingsComponentComponent, TrainingsDetailComponent, TakePlaceSoonPipe, TrainingListRoutComponentComponent],
  imports: [ 
    CommonModule, 
    FormsModule,
    RouterModule 
  ]
})
export class TrainingsModuleModule { }
