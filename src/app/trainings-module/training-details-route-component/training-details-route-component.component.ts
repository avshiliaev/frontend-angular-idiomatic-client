import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { tap, switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TrainingServiceService } from 'src/app/training-service.service';
import { Training } from '../../training';

@Component({
  selector: 'app-training-details-route-component',
  templateUrl: './training-details-route-component.component.html',
  styleUrls: ['./training-details-route-component.component.css']
})
export class TrainingDetailsRouteComponentComponent implements OnInit {

  training$: Observable<Training>; 

  constructor(private route: ActivatedRoute, private trainingService: TrainingServiceService) { }

  ngOnInit() {  
    this.training$ = this.route.params.pipe(
      map(params => parseInt(params['id'], 10)),
      switchMap(id => this.trainingService.getById(id))
    );
  }



}
