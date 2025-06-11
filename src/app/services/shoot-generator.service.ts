import { Injectable } from '@angular/core';
import {
  Arrow,
  ShootSituation,
  ScoreResult,
} from '../models/shoot-situation.model';

@Injectable({ providedIn: 'root' })
export class ShootGeneratorService {
  generateSituation(
    minArrows: number = 3,
    maxScore: number = 10
  ): ShootSituation & { errorSpot?: number } {
    const arrows: Arrow[] = [];
    const numArrows = this.randomInt(minArrows, minArrows + 1);
    const spots = [1, 2, 3];
    let spotsForArrows: number[] = [];
    let errorSpot: number | undefined;

    if (Math.random() < 0.8) {
      spotsForArrows = this.shuffle(spots).slice(0, numArrows);
    } else {
      const repeatedSpot = spots[this.randomInt(0, spots.length - 1)];
      errorSpot = repeatedSpot;

      spotsForArrows = [repeatedSpot, repeatedSpot];

      const otherSpots = spots.filter((s) => s !== repeatedSpot);

      const remainingSpots = this.shuffle(otherSpots).slice(0, numArrows - 2);
      spotsForArrows = spotsForArrows.concat(remainingSpots);
    }

    spotsForArrows = this.shuffle(spotsForArrows);

    for (const spot of spotsForArrows) {
      const value = this.randomInt(0, maxScore);
      const isLate = Math.random() < 0.1;
      arrows.push({ value, spot, isLate });
    }

    const spotCounts = arrows.reduce<Record<number, number>>((acc, arrow) => {
      acc[arrow.spot] = (acc[arrow.spot] || 0) + 1;
      return acc;
    }, {});

    const duplicateSpots = Object.values(spotCounts).some((count) => count > 1);
    const tooManyArrows = arrows.length > 3;

    const lateWarningGiven = Math.random() < 0.5;

    return {
      arrows,
      errors: {
        tooManyArrows,
        duplicateSpots,
      },
      errorSpot,
      lateWarningGiven,
    };
  }

  private shuffle<T>(array: T[]): T[] {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  calculateScore(
    situation: ShootSituation,
    forceLateErrors: boolean = true
  ): ScoreResult {
    const maxArrows = 3;
    let arrows = [...situation.arrows];

    const spotGroups = new Map<number, Arrow[]>();
    arrows.forEach((a) => {
      if (!spotGroups.has(a.spot)) spotGroups.set(a.spot, []);
      spotGroups.get(a.spot)!.push(a);
    });

    const tooManyArrowsErrors =
      arrows.length > maxArrows ? arrows.length - maxArrows : 0;

    let duplicateErrors = 0;
    const duplicateErrorsPerSpot = new Map<number, number>();
    spotGroups.forEach((arrowsAtSpot, spot) => {
      if (arrowsAtSpot.length > 1) {
        const errorsHere = arrowsAtSpot.length - 1;
        duplicateErrors += errorsHere;
        duplicateErrorsPerSpot.set(spot, errorsHere);
      }
    });

    const lateArrows = arrows.filter((a) => a.isLate);
    let lateErrors = 0;
    if (situation.lateWarningGiven || forceLateErrors) {
      lateErrors = lateArrows.length;
    }

    const totalErrors = tooManyArrowsErrors + duplicateErrors + lateErrors;

    const toRemove = new Set<Arrow>();

    duplicateErrorsPerSpot.forEach((errorsInSpot, spot) => {
      const arrowsAtSpot = arrows
        .filter((a) => a.spot === spot)
        .sort((a, b) => b.value - a.value);
      for (let i = 0; i < errorsInSpot; i++) {
        toRemove.add(arrowsAtSpot[i]);
      }
    });

    for (let i = 0; i < tooManyArrowsErrors; i++) {
      const remaining = arrows.filter((a) => !toRemove.has(a));
      if (remaining.length === 0) break;
      const bestArrow = remaining.reduce((max, a) =>
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
