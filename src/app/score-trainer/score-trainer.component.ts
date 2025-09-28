import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-score-trainer',
  templateUrl: './score-trainer.component.html',
  styleUrl: './score-trainer.component.scss',
  standalone: false,
})
export class ScoreTrainerComponent {
  spotTypes = environment.spotTypes;
  selectedSpotType: string = this.spotTypes[0];

  constructor() {}

  onSpotTypeChange() {
    console.log('Selected spot type:', this.selectedSpotType);
  }
}
