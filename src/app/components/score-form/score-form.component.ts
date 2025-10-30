import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrl: './score-form.component.scss',
  standalone: false,
})
export class ScoreFormComponent {
  @Output() submitted = new EventEmitter<boolean>();
  @Input() scoreForm: FormGroup = new FormGroup({});
  @Input() minArrowValue: number = 0;
  @Input() maxArrowValue: number = 0;
  @Input() numArrows: number = 0;

  onSubmit(): void {
    this.submitted.emit(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }

  get arrowValues(): number[] {
    const values: number[] = [];
    for (let i = this.minArrowValue; i <= this.maxArrowValue; i++) {
      values.push(i);
    }
    return values;
  }
}
