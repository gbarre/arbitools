import { Injectable } from '@angular/core';
import {
  Arrow,
  ShootSituation,
  ScoreResult,
} from '../models/shoot-situation.model';

@Injectable({ providedIn: 'root' })
export class MonospotGeneratorService {
  generateSituation(
    minArrows: number = 3,
    minScore: number = 1,
    maxScore: number = 10
  ): ShootSituation & { errorSpot?: number } {
    const arrows: Arrow[] = [];
    const numArrows = this.randomInt(minArrows, minArrows + 1);

    for (let i = 0; i < numArrows; i++) {
      const value =
        Math.random() < 0.1 ? 0 : this.randomInt(minScore, maxScore);
      const isLate = Math.random() < 0.1;
      arrows.push({ value, isLate });
    }

    const tooManyArrows = arrows.length > 3;
    const lateWarningGiven = Math.random() < 0.5;

    return {
      arrows,
      errors: {
        tooManyArrows,
      },
      lateWarningGiven,
    };
  }

  calculateScore(
    situation: ShootSituation,
    forceLateErrors: boolean = true
  ): ScoreResult {
    const maxArrows = 3;
    let arrows = [...situation.arrows];

    const tooManyArrowsErrors =
      arrows.length > maxArrows ? arrows.length - maxArrows : 0;

    const lateArrows = arrows.filter((a) => a.isLate);
    let lateErrors = 0;
    if (situation.lateWarningGiven || forceLateErrors) {
      lateErrors = lateArrows.length;
    }

    const totalErrors = tooManyArrowsErrors + lateErrors;

    const toRemove = new Set<Arrow>();

    for (let i = 0; i < tooManyArrowsErrors; i++) {
      const bestArrow = arrows.reduce((max, a) =>
        a.value > max.value ? a : max
      );
      toRemove.add(bestArrow);
    }

    for (let i = 0; i < lateErrors; i++) {
      const remaining = arrows.filter((a) => !toRemove.has(a));
      if (remaining.length === 0) break;
      const bestArrow = remaining.reduce((max, a) =>
        a.value > max.value ? a : max
      );
      toRemove.add(bestArrow);
    }

    const retainedArrows = arrows.filter((a) => !toRemove.has(a));
    const retainedScore = retainedArrows.reduce((sum, a) => sum + a.value, 0);

    return {
      penaltyCount: totalErrors,
      retainedScore,
      retainedArrows,
    };
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
