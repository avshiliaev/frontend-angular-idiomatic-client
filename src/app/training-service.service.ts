import { Injectable } from '@angular/core';
import { TRAININGS } from './training.mock';
import { Training } from "./training"
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {

  private trainingsSubject = new ReplaySubject<Training[]>(1);

  constructor() { 
    this.trainingsSubject.next(TRAININGS);
   };

  getAll(): Observable<Training[]> {
    return this.trainingsSubject; 
  };
}
