import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponentComponent } from './trainings-component/trainings-component.component';
import { TrainingsDetailComponent } from './trainings-detail/trainings-detail.component';

@NgModule({
  declarations: [TrainingsComponentComponent, TrainingsDetailComponent],
  exports: [TrainingsComponentComponent, TrainingsDetailComponent],
  imports: [ 
    CommonModule 
  ]
})
export class TrainingsModuleModule { }
