import { Injectable } from '@angular/core';
import { TRAININGS } from './training.mock';
import { Training } from "./training"

@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {

  getAll(): Training[] {
    return TRAININGS;
  }

  constructor() { }
}
