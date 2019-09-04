import { Component, OnInit, Input } from '@angular/core';
import { Training } from "src/app/training"

@Component({
  selector: 'app-trainings-component',
  templateUrl: './trainings-component.component.html',
  styleUrls: ['./trainings-component.component.css']
})
export class TrainingsComponentComponent implements OnInit {

  @Input() trainings: Training[];

  constructor() { }

  ngOnInit() {
  }

  clickFunc(event: MouseEvent, t: Training){
    console.log(t.name); 
  }

}
