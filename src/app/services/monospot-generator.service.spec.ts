import { Arrow, ShootSituation } from '../models/shoot-situation.model';
import { MonospotGeneratorService } from './monospot-generator.service';

function situation(
  arrows: [number, boolean?][],
  lateWarningGiven = false
): ShootSituation {
  const list: Arrow[] = arrows.map(([value, isLate = false]) => ({
    value,
    isLate,
  }));
  return {
    arrows: list,
    errors: { tooManyArrows: list.length > 3 },
    lateWarningGiven,
  };
}

const values = (arrows: Arrow[]) => arrows.map((a) => a.value);

describe('MonospotGeneratorService', () => {
  let service: MonospotGeneratorService;

  beforeEach(() => {
    service = new MonospotGeneratorService();
  });

  describe('calculateScore', () => {
    it('additionne les 3 flèches sans pénalité', () => {
      const result = service.calculateScore(situation([[9], [8], [7]]));
      expect(result.penaltyCount).toBe(0);
      expect(result.retainedScore).toBe(24);
      expect(values(result.retainedArrows)).toEqual([9, 8, 7]);
    });

    it('compte une flèche manquée pour 0', () => {
      const result = service.calculateScore(situation([[10], [0], [7]]));
      expect(result.retainedScore).toBe(17);
    });

    it('retire la meilleure flèche pour chaque flèche en trop', () => {
      const result = service.calculateScore(
        situation([[7], [10], [9], [8]])
      );
      expect(result.penaltyCount).toBe(1);
      expect(values(result.retainedArrows)).toEqual([7, 9, 8]);
      expect(result.retainedScore).toBe(24);
    });

    it('retire la meilleure flèche pour une flèche tirée hors temps (pénalité forcée par défaut)', () => {
      const result = service.calculateScore(
        situation([[10], [9], [8, true]])
      );
      expect(result.penaltyCount).toBe(1);
      expect(values(result.retainedArrows)).toEqual([9, 8]);
      expect(result.retainedScore).toBe(17);
    });

    it('ne pénalise pas une flèche hors temps sans avertissement préalable si la pénalité n’est pas forcée', () => {
      const result = service.calculateScore(
        situation([[10], [9], [8, true]], false),
        false
      );
      expect(result.penaltyCount).toBe(0);
      expect(result.retainedScore).toBe(27);
    });

    it('pénalise une flèche hors temps après avertissement même si la pénalité n’est pas forcée', () => {
      const result = service.calculateScore(
        situation([[10], [9], [8, true]], true),
        false
      );
      expect(result.penaltyCount).toBe(1);
      expect(result.retainedScore).toBe(17);
    });

    it('cumule flèches en trop et flèches hors temps', () => {
      const result = service.calculateScore(
        situation([[10], [9], [8], [7, true], [6]])
      );
      // 2 flèches en trop (10 et 9 retirées) + 1 hors temps (8 retirée)
      expect(result.penaltyCount).toBe(3);
      expect(values(result.retainedArrows)).toEqual([7, 6]);
      expect(result.retainedScore).toBe(13);
    });

    it('ne retient aucune flèche si les pénalités dépassent le nombre de flèches', () => {
      const result = service.calculateScore(
        situation([[10, true], [9, true], [8, true], [7, true]])
      );
      expect(result.penaltyCount).toBe(5);
      expect(result.retainedArrows).toEqual([]);
      expect(result.retainedScore).toBe(0);
    });

    it('ne modifie pas la situation passée en paramètre', () => {
      const input = situation([[10], [9], [8], [7]]);
      const copy = structuredClone(input);
      service.calculateScore(input);
      expect(input).toEqual(copy);
    });
  });

  describe('generateSituation', () => {
    it.each([
      [3, 1, 10],
      [3, 1, 6],
    ])(
      'génère des situations valides (min %i flèches, scores %i à %i)',
      (minArrows, minScore, maxScore) => {
        for (let n = 0; n < 500; n++) {
          const s = service.generateSituation(minArrows, minScore, maxScore);
          expect(s.arrows.length).toBeGreaterThanOrEqual(minArrows);
          expect(s.arrows.length).toBeLessThanOrEqual(minArrows + 2);
          expect(s.errors.tooManyArrows).toBe(s.arrows.length > 3);
          for (const arrow of s.arrows) {
            expect(
              arrow.value === 0 ||
                (arrow.value >= minScore && arrow.value <= maxScore)
            ).toBe(true);
            expect(Number.isInteger(arrow.value)).toBe(true);
          }
        }
      }
    );
  });
});
