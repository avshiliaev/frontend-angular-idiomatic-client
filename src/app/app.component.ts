import { Component } from '@angular/core';
import { Training } from "./training"
import {TrainingServiceService} from "./training-service.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "abc"; 
  trainings: Training[]
  selectedEvent: Training;


  constructor(private train: TrainingServiceService){
    this.trainings = train.getAll()
  }


  eventCatcher($event) { 
    this.selectedEvent = $event; 
  }
}
