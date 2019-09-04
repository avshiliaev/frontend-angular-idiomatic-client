import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Training } from "src/app/training"

@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent implements OnInit {

  @Input() selectedTraining: Training[];
  //@Output() like = new EventEmitter<Training>();

  constructor() { }

  ngOnInit() {
  }

}
