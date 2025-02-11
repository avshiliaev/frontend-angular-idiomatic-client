import { Injectable } from '@angular/core';
import { TRAININGS } from './training.mock';
import { Training } from "./training"
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {

  private trainingsSubject = new ReplaySubject<Training[]>(1);
  private cached: boolean = false;

  constructor(private httpClient: HttpClient) {};

   getAll(): Observable<Training[]> { 
    if (!this.cached) {
      this.load(); 
      this.cached = true;
    } 
    return this.trainingsSubject; 
  }
 
  load() {
    this.httpClient.get<Training[]>('http://localhost:3000/api/training') 
      .subscribe(ts => {
        this.trainingsSubject.next(ts);  
      }); 
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
