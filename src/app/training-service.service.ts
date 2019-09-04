import { Injectable } from '@angular/core';
import { TRAININGS } from './training.mock';
import { Training } from "./training"
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getById(id: number): Observable<Training> {
    return this.getAll() 
      .pipe(
        map(ts => {
          const training = ts.find(t => t.id === id);
          if (training) {
            return training
          } else {
            throw new Error(`Could not find training with id ${id}`);
          }
        })
      );
  }
}
