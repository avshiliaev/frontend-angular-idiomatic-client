import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Training } from "src/app/training";
import { FormGroup, FormControl, Validators } from "@angular/forms"; 
import { DiscontinuedValidator } from 'src/app/validators/future.validator';

@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent implements OnInit {

  @Input() selectedTraining: Training;
  //@Output() like = new EventEmitter<Training>();
  public form: FormGroup; 

  constructor(private discVal: DiscontinuedValidator) { };

  ngOnInit(){

  }

  ngOnChange() {
    if (this.selectedTraining) {
      this.form = new FormGroup({
        name: new FormControl(
          this.selectedTraining.name, 
            [
              Validators.required, 
              Validators.minLength(3) 
            ]
          ),
        nextRun: new FormControl(
          this.selectedTraining.nextRun,
          [
            Validators.required, 
          ] 
          )
      }, this.discVal.validator("nextRun", "nextRun"));
    }

  };
 
  onSubmit() {
    Object.assign(this.selectedTraining, this.form.value);
  };
}
