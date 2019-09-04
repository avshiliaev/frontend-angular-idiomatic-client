import { Component, OnInit } from '@angular/core';
import { Training } from "src/app/training"
import {TrainingServiceService} from "src/app/training-service.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-training-list-rout-component',
  templateUrl: './training-list-rout-component.component.html',
  styleUrls: ['./training-list-rout-component.component.css']
})
export class TrainingListRoutComponentComponent {

  title = "abc"; 
  $trainings: Observable<Training[]>
  selectedEvent: Training;


  constructor(private train: TrainingServiceService){}

  ngOnInit(): void {
    this.$trainings = this.train.getAll();
  }

  eventCatcher($event) { 
    this.selectedEvent = $event; 
  }
}
