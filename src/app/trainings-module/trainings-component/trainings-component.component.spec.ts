import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsComponentComponent } from './trainings-component.component';

describe('TrainingsComponentComponent', () => {
  let component: TrainingsComponentComponent;
  let fixture: ComponentFixture<TrainingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
