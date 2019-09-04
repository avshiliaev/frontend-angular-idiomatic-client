import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from "src/app/training"

@Component({
  selector: 'app-trainings-component',
  templateUrl: './trainings-component.component.html',
  styleUrls: ['./trainings-component.component.css']
})
export class TrainingsComponentComponent implements OnInit {

  @Input() trainings: Training[];
  @Output() like = new EventEmitter<Training>();

  constructor() { }

  ngOnInit() { 
  }

  eventEmitter(click_event: MouseEvent, t: Training){
    console.log(t.name); 
    const event =  t;
    this.like.emit(event);
  }

}
