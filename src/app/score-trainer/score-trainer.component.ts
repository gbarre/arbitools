import { Component, OnInit } from '@angular/core';
import {
  Arrow,
  ScoreResult,
  ShootSituation,
} from '../models/shoot-situation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShootGeneratorService } from '../services/shoot-generator.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-score-trainer',
  templateUrl: './score-trainer.component.html',
  styleUrl: './score-trainer.component.scss',
  standalone: false,
})
export class ScoreTrainerComponent implements OnInit {
  situation!: ShootSituation & { errorSpot?: number };
  scoreResult!: ScoreResult;
  scoreForm!: FormGroup;
  submitted = false;
  groupedArrows: Record<number, Arrow[]> = { 1: [], 2: [], 3: [] };
  disciplines = Object.keys(environment.scores);
  selectedDiscipline = this.disciplines[0];

  constructor(
    private generator: ShootGeneratorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    this.submitted = false;
    this.situation = this.generator.generateSituation(
      this.numArrows,
      this.maxArrowValue
    );
    this.scoreResult = this.generator.calculateScore(
      this.situation,
      this.selectedDiscipline !== 'scores_campagne'
    );
    this.groupArrowsBySpot();

    this.scoreForm = this.fb.group({
      arrow1: [
        null,
        [Validators.required, Validators.min(0), Validators.max(6)],
      ],
      arrow2: [
        null,
        [Validators.required, Validators.min(0), Validators.max(6)],
      ],
      arrow3: [
        null,
        [Validators.required, Validators.min(0), Validators.max(6)],
      ],
      retainedScore: [
        null,
        [Validators.required, Validators.min(0), Validators.max(18)],
      ],
    });
  }

  groupArrowsBySpot(): void {
    this.groupedArrows = { 1: [], 2: [], 3: [] };
    this.situation.arrows.forEach((arrow) => {
      this.groupedArrows[arrow.spot].push(arrow);
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  get retainedArrows(): number[] {
    const values = this.scoreResult.retainedArrows
      .map((a) => a.value)
      .sort((a, b) => b - a);

    while (values.length < this.numArrows) {
      values.push(0);
    }

    return values;
  }

  get maxArrowValue(): number {
    return (environment.scores as any)[this.selectedDiscipline].trispot.max;
  }

  get numArrows(): number {
    return (environment.scores as any)[this.selectedDiscipline].trispot.arrows;
  }
  get hasLateArrow(): boolean {
    return this.situation.arrows.some((arrow) => arrow.isLate === true);
  }
}
