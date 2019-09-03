import { Component } from '@angular/core';
import { Training } from "./training"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  training: Training[] = [
    {
      id:1,
      name: "name_1",
      description: "description_1"
    },
    {
      id:2,
      name: "name_2",
      description: "description_2"
    },
    {
      id:3,
      name: "name_3",
      description: "description_3"
    }
  ]; 
}
