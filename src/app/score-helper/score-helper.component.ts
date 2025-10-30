import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonospotGeneratorService } from '../services/monospot-generator.service';
import { TrispotGeneratorService } from '../services/trispot-generator.service';
import {
  Arrow,
  SpottedArrow,
  ShootSituation,
  SpottedShootSituation,
  ScoreResult,
} from '../models/shoot-situation.model';

interface ArrowInput {
  value: number;
  spot?: number;
  isLate: boolean;
}

@Component({
  selector: 'app-score-helper',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score-helper.component.html',
  styleUrl: './score-helper.component.scss',
})
export class ScoreHelperComponent {
  spotType: 'monospot' | 'trispot' = 'monospot';
  shootType: 'indoor' | 'field' = 'indoor';
  lateWarningGiven = false;
  arrows: ArrowInput[] = [];
  result: ScoreResult | null = null;
  explanation = '';

  constructor(
    private monospotService: MonospotGeneratorService,
    private trispotService: TrispotGeneratorService
  ) {
    this.initializeArrows();
  }

  initializeArrows(): void {
    this.arrows = [
      { value: 0, spot: 1, isLate: false },
      { value: 0, spot: 2, isLate: false },
      { value: 0, spot: 3, isLate: false },
    ];
  }

  resetForm(): void {
    this.initializeArrows();
    this.result = null;
    this.explanation = '';
    this.lateWarningGiven = false;
  }

  addArrow(): void {
    if (this.arrows.length < 5) {
      this.arrows.push({
        value: 0,
        spot: this.spotType === 'trispot' ? 1 : undefined,
        isLate: false,
      });
    }
  }

  removeArrow(index: number): void {
    if (this.arrows.length > 3) {
      this.arrows.splice(index, 1);
    }
  }

  getMaxScore(): number {
    if (this.shootType === 'field') {
      return 6;
    }
    return 10;
  }

  getMinScore(): number {
    if (this.shootType === 'indoor' && this.spotType === 'trispot') {
      return 6;
    }
    return 0;
  }

  getValidScores(): number[] {
    if (this.shootType === 'indoor' && this.spotType === 'trispot') {
      return [0, 6, 7, 8, 9, 10];
    }
    const max = this.getMaxScore();
    return Array.from({ length: max + 1 }, (_, i) => i);
  }

  calculateScore(): void {
    if (this.spotType === 'monospot') {
      this.calculateMonospotScore();
    } else {
      this.calculateTrispotScore();
    }
  }

  private calculateMonospotScore(): void {
    const situation: ShootSituation = {
      arrows: this.arrows.map((a) => ({
        value: a.value,
        isLate: a.isLate,
      })),
      errors: {
        tooManyArrows: this.arrows.length > 3,
      },
      lateWarningGiven:
        this.shootType === 'field' ? this.lateWarningGiven : false,
    };

    const forceLateErrors = this.shootType === 'indoor';
    this.result = this.monospotService.calculateScore(
      situation,
      forceLateErrors
    );
    this.explanation = this.buildMonospotExplanation(
      situation,
      forceLateErrors
    );
  }

  private calculateTrispotScore(): void {
    const situation: SpottedShootSituation = {
      arrows: this.arrows.map((a) => ({
        value: Number(a.value),
        spot: Number(a.spot) || 1,
        isLate: a.isLate,
      })),
      errors: {
        tooManyArrows: this.arrows.length > 3,
        duplicateSpots: this.hasDuplicateSpots(),
      },
      lateWarningGiven:
        this.shootType === 'field' ? this.lateWarningGiven : false,
    };

    const forceLateErrors = this.shootType === 'indoor';

    this.result = this.trispotService.calculateScore(
      situation,
      forceLateErrors
    );

    this.explanation = this.buildTrispotExplanation(situation, forceLateErrors);
  }

  private hasDuplicateSpots(): boolean {
    const spotCounts = new Map<number, number>();
    for (const arrow of this.arrows) {
      if (arrow.spot) {
        spotCounts.set(arrow.spot, (spotCounts.get(arrow.spot) || 0) + 1);
      }
    }
    return Array.from(spotCounts.values()).some((count) => count > 1);
  }

  private buildMonospotExplanation(
    situation: ShootSituation,
    forceLateErrors: boolean
  ): string {
    const parts: string[] = [];
    const totalArrows = situation.arrows.length;
    const totalScore = situation.arrows.reduce((sum, a) => sum + a.value, 0);

    const arrowValuesDesc: number[] = situation.arrows
      .map((a) => a.value)
      .slice()
      .sort((a, b) => b - a);

    parts.push(
      `<p>
        <strong>Situation :</strong>
        ${totalArrows} flèches tirées pour un total de ${totalScore}
        point${totalScore > 1 ? 's' : ''} : ${arrowValuesDesc.join(' + ')}.
      </p>`
    );

    const tooManyErrors = totalArrows > 3 ? totalArrows - 3 : 0;
    const lateCount = situation.arrows.filter((a) => a.isLate).length;
    const lateErrors =
      situation.lateWarningGiven || forceLateErrors ? lateCount : 0;

    if (tooManyErrors > 0) {
      parts.push(
        `<p>
          <strong>Trop de flèches :</strong>
          ${tooManyErrors} pénalité${tooManyErrors > 1 ? 's' : ''} pour avoir
          tiré plus de 3 flèches.
          L${tooManyErrors > 1 ? 'es ' : 'a '}
          ${tooManyErrors > 1 ? tooManyErrors : ''}
          meilleure${tooManyErrors > 1 ? 's' : ''}
          flèche${tooManyErrors > 1 ? 's ' : ' '}
          restante${tooManyErrors > 1 ? 's sont ' : ' est '}
          retirée${tooManyErrors > 1 ? 's' : ''}.
        </p>`
      );
    }

    if (lateErrors > 0) {
      parts.push(
        `<p>
          <strong>
            Hors temps (${forceLateErrors ? 'salle' : 'campagne'}) :
          </strong>
          ${lateErrors} pénalité${lateErrors > 1 ? 's' : ''}
          ${forceLateErrors ? '' : " car l'avertissement a été donné"}.
          L${lateErrors > 1 ? 'es ' : 'a '}
          ${lateErrors > 1 ? lateErrors : ''}
          meilleure${lateErrors > 1 ? 's' : ''}
          flèche${lateErrors > 1 ? 's ' : ' '}
          restante${lateErrors > 1 ? 's sont ' : ' est '}
          retirée${lateErrors > 1 ? 's' : ''}.
        </p>`
      );
    }

    if (tooManyErrors === 0 && lateErrors === 0) {
      parts.push('<p><strong>Aucune pénalité.</strong></p>');
    }

    return parts.join('');
  }

  private buildTrispotExplanation(
    situation: SpottedShootSituation,
    forceLateErrors: boolean
  ): string {
    const parts: string[] = [];
    const totalArrows = situation.arrows.length;
    const totalScore = situation.arrows.reduce((sum, a) => sum + a.value, 0);

    const arrowValuesDesc: number[] = situation.arrows
      .map((a) => a.value)
      .slice()
      .sort((a, b) => b - a);

    parts.push(
      `<p>
        <strong>Situation :</strong>
        ${totalArrows} flèches tirées pour un total de ${totalScore}
        point${totalScore > 1 ? 's' : ''} : ${arrowValuesDesc.join(' + ')}.
      </p>`
    );

    const spotCounts = new Map<number, number>();
    situation.arrows.forEach((a) => {
      spotCounts.set(a.spot, (spotCounts.get(a.spot) || 0) + 1);
    });

    let duplicateErrors = 0;
    spotCounts.forEach((count, spot) => {
      if (count > 1) {
        const errors = count - 1;
        duplicateErrors += errors;
        parts.push(
          `<p>
            <strong>Spot ${spot} en doublons :</strong>
            ${errors} pénalité${errors > 1 ? 's' : ''}.
            L${errors > 1 ? 'es ' : 'a '}
            ${errors > 1 ? errors : ''}
            meilleure${errors > 1 ? 's' : ''}
            flèche${errors > 1 ? 's' : ''}
            de ce spot ${errors > 1 ? 'sont ' : 'est '}
            retirée${errors > 1 ? 's' : ''}.
          </p>`
        );
      }
    });

    const tooManyErrors = totalArrows > 3 ? totalArrows - 3 : 0;
    if (tooManyErrors > 0) {
      parts.push(
        `<p>
          <strong>Trop de flèches :</strong>
          ${tooManyErrors} pénalité${tooManyErrors > 1 ? 's' : ''} pour avoir
          tiré plus de 3 flèches.
          L${tooManyErrors > 1 ? 'es ' : 'a '}
          ${tooManyErrors > 1 ? tooManyErrors : ''}
          meilleure${tooManyErrors > 1 ? 's' : ''}
          flèche${tooManyErrors > 1 ? 's ' : ' '}
          restante${tooManyErrors > 1 ? 's sont ' : ' est '}
          retirée${tooManyErrors > 1 ? 's' : ''}.
        </p>`
      );
    }

    const lateCount = situation.arrows.filter((a) => a.isLate).length;
    const lateErrors =
      situation.lateWarningGiven || forceLateErrors ? lateCount : 0;

    if (lateErrors > 0) {
      parts.push(
        `<p>
          <strong>
            Hors temps (${forceLateErrors ? 'salle' : 'campagne'}) :
          </strong>
          ${lateErrors} pénalité${lateErrors > 1 ? 's' : ''}
          ${forceLateErrors ? '' : " car l'avertissement a été donné"}.
          L${lateErrors > 1 ? 'es ' : 'a '}
          ${lateErrors > 1 ? lateErrors : ''}
          meilleure${lateErrors > 1 ? 's' : ''}
          flèche${lateErrors > 1 ? 's ' : ' '}
          restante${lateErrors > 1 ? 's sont ' : ' est '}
          retirée${lateErrors > 1 ? 's' : ''}.
        </p>`
      );
    }

    if (duplicateErrors === 0 && tooManyErrors === 0 && lateErrors === 0) {
      parts.push('<p><strong>Aucune pénalité.</strong></p>');
    }

    return parts.join('');
  }

  isSpottedArrow(arrow: Arrow | SpottedArrow): arrow is SpottedArrow {
    return 'spot' in arrow;
  }
}
