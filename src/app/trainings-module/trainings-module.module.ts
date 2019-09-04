import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponentComponent } from './trainings-component/trainings-component.component';
import { TrainingsDetailComponent } from './trainings-detail/trainings-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrainingsComponentComponent, TrainingsDetailComponent],
  exports: [TrainingsComponentComponent, TrainingsDetailComponent],
  imports: [ 
    CommonModule,
    FormsModule 
  ]
})
export class TrainingsModuleModule { }
