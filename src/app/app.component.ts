import { Component, OnInit } from '@angular/core';
import { Training } from "./training"
import {TrainingServiceService} from "./training-service.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "abc"; 
  trainings: Observable<Training[]>
  selectedEvent: Training;


  constructor(private train: TrainingServiceService){}

  ngOnInit(): void {
    this.trainings = this.train.getAll();
  }

  eventCatcher($event) { 
    this.selectedEvent = $event; 
  }
}
