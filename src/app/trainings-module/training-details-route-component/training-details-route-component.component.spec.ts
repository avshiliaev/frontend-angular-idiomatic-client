import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsRouteComponentComponent } from './training-details-route-component.component';

describe('TrainingDetailsRouteComponentComponent', () => {
  let component: TrainingDetailsRouteComponentComponent;
  let fixture: ComponentFixture<TrainingDetailsRouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDetailsRouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailsRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
