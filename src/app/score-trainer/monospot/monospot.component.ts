import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Arrow,
  ScoreResult,
  ShootSituation,
} from 'src/app/models/shoot-situation.model';
import { MonospotGeneratorService } from 'src/app/services/monospot-generatorservice';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-monospot',
  templateUrl: './monospot.component.html',
  styleUrl: './monospot.component.scss',
  standalone: false,
})
export class MonospotComponent implements OnInit {
  situation!: ShootSituation;
  scoreResult!: ScoreResult;
  scoreForm!: FormGroup;
  submitted = false;
  groupedArrows: Record<number, Arrow[]> = { 1: [], 2: [], 3: [] };
  disciplines = Object.keys(environment.scores);
  selectedDiscipline = this.disciplines[0];

  @ViewChild('arrow1Input') arrow1Input!: ElementRef<HTMLInputElement>;

  constructor(
    private generator: MonospotGeneratorService,
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
    return (environment.scores as any)[this.selectedDiscipline].monospot.min;
  }

  get maxArrowValue(): number {
    return (environment.scores as any)[this.selectedDiscipline].monospot.max;
  }

  get numArrows(): number {
    return (environment.scores as any)[this.selectedDiscipline].monospot.arrows;
  }
  get hasLateArrow(): boolean {
    return this.situation.arrows.some((arrow) => arrow.isLate === true);
  }
}
