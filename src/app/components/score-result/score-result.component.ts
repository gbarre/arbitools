import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ScoreResult,
  ShootSituation,
} from 'src/app/models/shoot-situation.model';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrl: './score-result.component.scss',
  standalone: false,
})
export class ScoreResultComponent {
  @Input() scoreResult!: ScoreResult;
  @Input() situation!: ShootSituation;
  @Input() hasLateArrow: boolean = false;
  @Input() selectedDiscipline: string = '';
  @Input() scoreForm: FormGroup = new FormGroup({});
  @Input() retainedArrows: number[] = [];
}
