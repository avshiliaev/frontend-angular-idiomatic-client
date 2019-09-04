import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListRoutComponentComponent } from './training-list-rout-component.component';

describe('TrainingListRoutComponentComponent', () => {
  let component: TrainingListRoutComponentComponent;
  let fixture: ComponentFixture<TrainingListRoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingListRoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListRoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
