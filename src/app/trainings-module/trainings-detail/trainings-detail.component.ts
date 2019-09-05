import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Training } from "src/app/training";
import { FormGroup, FormControl } from "@angular/forms"; 

@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent implements OnInit {

  @Input() selectedTraining: Training;
  //@Output() like = new EventEmitter<Training>();
  public form: FormGroup; 

  constructor() { };

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.selectedTraining.name),
      nextRun: new FormControl(this.selectedTraining.nextRun)
    });
  };
 
  onSubmit() {
    Object.assign(this.selectedTraining, this.form.value);
  };


  
 
}
