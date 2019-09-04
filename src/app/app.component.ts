import { Component } from '@angular/core';
import { Training } from "./training"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "abc"; 
  trainings: Training[] = [
    {
      id:1,
      name: "Angular",
      description: "description_1",
      imgUrl: "assets/angular2-shield.svg",
      discontinued: false
    },
    {
      id:2,
      name: "Docker",
      description: "description_2",
      imgUrl: "assets/docker.svg",
      discontinued: true
    },
    {
      id:3,
      name: "Kubernetes",
      description: "description_3",
      imgUrl: "assets/Kubernetes.svg",
      discontinued: false
    }
  ]; 

  selectedEvent: Training;

  eventCatcher($event) { 
    this.selectedEvent = $event; 
  }
}
