import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  SpottedArrow,
  ScoreResult,
  SpottedShootSituation,
} from 'src/app/models/shoot-situation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrispotGeneratorService } from 'src/app/services/trispot-generator.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-trispot',
  templateUrl: './trispot.component.html',
  styleUrl: './trispot.component.scss',
  standalone: false,
})
export class TrispotComponent implements OnInit {
  situation!: SpottedShootSituation & { errorSpot?: number };
  scoreResult!: ScoreResult;
  scoreForm!: FormGroup;
  submitted = false;
  groupedArrows: Record<number, SpottedArrow[]> = { 1: [], 2: [], 3: [] };
  disciplines = Object.keys(environment.scores);
  selectedDiscipline = this.disciplines[0];

  @ViewChild('arrow1Input') arrow1Input!: ElementRef<HTMLInputElement>;

  constructor(
    private generator: TrispotGeneratorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    this.submitted = false;
    this.situation = this.generator.generateSituation(
      this.numArrows,
      this.minArrowValue,
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
    setTimeout(() => {
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }, 200);
  }

  groupArrowsBySpot(): void {
    this.groupedArrows = { 1: [], 2: [], 3: [] };
    this.situation.arrows.forEach((arrow) => {
      this.groupedArrows[arrow.spot].push(arrow);
    });
  }

  showAnswer(submitted: boolean): void {
    this.submitted = submitted;
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

  get minArrowValue(): number {
    return (environment.scores as any)[this.selectedDiscipline].trispot.min;
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
