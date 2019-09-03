import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponentComponent } from './trainings-component/trainings-component.component';



@NgModule({
  declarations: [TrainingsComponentComponent],
  exports: [TrainingsComponentComponent],
  imports: [
    CommonModule 
  ]
})
export class TrainingsModuleModule { }
