import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTrainerComponent } from './score-trainer.component';

describe('ScoreTrainerComponent', () => {
  let component: ScoreTrainerComponent;
  let fixture: ComponentFixture<ScoreTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
