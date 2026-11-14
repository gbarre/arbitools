import {
  SpottedArrow,
  SpottedShootSituation,
} from '../models/shoot-situation.model';
import { TrispotGeneratorService } from './trispot-generator.service';

/** [valeur, spot, hors temps ?] */
function situation(
  arrows: [number, number, boolean?][],
  lateWarningGiven = false
): SpottedShootSituation {
  const list: SpottedArrow[] = arrows.map(([value, spot, isLate = false]) => ({
    value,
    spot,
    isLate,
  }));
  const spots = list.map((a) => a.spot);
  return {
    arrows: list,
    errors: {
      tooManyArrows: list.length > 3,
      duplicateSpots: new Set(spots).size !== spots.length,
    },
    lateWarningGiven,
  };
}

const values = (arrows: { value: number }[]) => arrows.map((a) => a.value);

describe('TrispotGeneratorService', () => {
  let service: TrispotGeneratorService;

  beforeEach(() => {
    service = new TrispotGeneratorService();
  });

  describe('calculateScore', () => {
    it('additionne une flèche par spot sans pénalité', () => {
      const result = service.calculateScore(
        situation([
          [10, 1],
          [9, 2],
          [8, 3],
        ])
      );
      expect(result.penaltyCount).toBe(0);
      expect(result.retainedScore).toBe(27);
    });

    it('retire la meilleure flèche d’un spot touché deux fois', () => {
      const result = service.calculateScore(
        situation([
          [9, 1],
          [10, 1],
          [8, 2],
        ])
      );
      expect(result.penaltyCount).toBe(1);
      expect(values(result.retainedArrows)).toEqual([9, 8]);
      expect(result.retainedScore).toBe(17);
    });

    it('retire les deux meilleures flèches d’un spot touché trois fois', () => {
      const result = service.calculateScore(
        situation([
          [8, 2],
          [10, 2],
          [9, 2],
        ])
      );
      expect(result.penaltyCount).toBe(2);
      expect(values(result.retainedArrows)).toEqual([8]);
    });

    it('cumule spot en double et flèche en trop', () => {
      const result = service.calculateScore(
        situation([
          [10, 1],
          [9, 2],
          [8, 3],
          [7, 1],
        ])
      );
      // Spot 1 en double : 10 retiré ; flèche en trop : 9 (meilleure restante) retiré
      expect(result.penaltyCount).toBe(2);
      expect(values(result.retainedArrows)).toEqual([8, 7]);
      expect(result.retainedScore).toBe(15);
    });

    it('applique la pénalité hors temps selon l’avertissement et le forçage', () => {
      const s = (warning: boolean) =>
        situation(
          [
            [10, 1],
            [9, 2],
            [8, 3, true],
          ],
          warning
        );
      expect(service.calculateScore(s(false)).retainedScore).toBe(17);
      expect(service.calculateScore(s(false), false).retainedScore).toBe(27);
      expect(service.calculateScore(s(true), false).retainedScore).toBe(17);
    });

    it('ne retient aucune flèche si les pénalités dépassent le nombre de flèches', () => {
      const result = service.calculateScore(
        situation([
          [10, 1, true],
          [9, 1, true],
          [8, 1, true],
        ])
      );
      expect(result.penaltyCount).toBe(5);
      expect(result.retainedArrows).toEqual([]);
      expect(result.retainedScore).toBe(0);
    });
  });

  describe('generateSituation', () => {
    it('génère des situations valides et cohérentes avec leurs indicateurs d’erreur', () => {
      for (let n = 0; n < 500; n++) {
        const s = service.generateSituation(3, 6, 10);
        expect(s.arrows.length).toBeGreaterThanOrEqual(1);
        expect(s.arrows.length).toBeLessThanOrEqual(5);
        expect(s.errors.tooManyArrows).toBe(s.arrows.length > 3);

        const spots = s.arrows.map((a) => a.spot);
        expect(s.errors.duplicateSpots).toBe(
          new Set(spots).size !== spots.length
        );

        for (const arrow of s.arrows) {
          expect([1, 2, 3]).toContain(arrow.spot);
          expect(arrow.value === 0 || (arrow.value >= 6 && arrow.value <= 10)).toBe(true);
        }
      }
    });

    it('ne laisse jamais une flèche manquée dans un spot touché deux fois', () => {
      for (let n = 0; n < 500; n++) {
        const s = service.generateSituation(3, 6, 10);
        for (const spot of [1, 2, 3]) {
          const atSpot = s.arrows.filter((a) => a.spot === spot);
          if (atSpot.length === 2) {
            expect(atSpot.some((a) => a.value === 0)).toBe(false);
          }
        }
      }
    });
  });
});
