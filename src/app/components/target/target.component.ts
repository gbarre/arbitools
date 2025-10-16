import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Arrow, SpottedArrow } from 'src/app/models/shoot-situation.model';

interface ProcessedArrow {
  value: number;
  x: number;
  y: number;
  angle: number;
  isLate: boolean;
  spot?: number;
}

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss'],
})
export class TargetComponent implements OnInit, OnChanges {
  @Input() discipline: 'campagne' | 'standard' = 'standard';
  @Input() size: number = 10; // 10, 6 ou 5 zones
  @Input() arrows: Arrow[] | SpottedArrow[] = [];

  @Input() targetSize = 400;
  centerX = this.targetSize / 2;
  centerY = this.targetSize / 2;
  processedArrows: ProcessedArrow[] = [];
  zones: any[] = [];

  ngOnInit() {
    this.generateZones();
    this.processArrows();
  }

  ngOnChanges() {
    this.centerX = this.targetSize / 2;
    this.centerY = this.targetSize / 2;
    this.generateZones();
    this.processArrows();
  }

  generateZones() {
    this.zones = [];
    const isCampagne = this.discipline === 'campagne';

    if (isCampagne) {
      // Cible campagne: 6 zones (2 jaunes + 4 noires)
      // Index 0 = score 6 (centre), index 5 = score 1 (extérieur)
      const colors = [
        '#000000',
        '#000000',
        '#000000',
        '#000000', // Noir (4, 3, 2, 1)
        '#FFD700',
        '#FFD700', // Jaune (6, 5) - centre
      ];
      const scores = [1, 2, 3, 4, 5, 6];

      for (let i = 0; i < 6; i++) {
        const isBlackZone = colors[i] === '#000000';
        this.zones.push({
          radius: ((this.targetSize / 2) * (6 - i)) / 6,
          color: colors[i],
          score: scores[i],
          strokeColor: isBlackZone ? '#FFFFFF' : '#000000',
        });
      }
    } else {
      // Cible standard: zones réduites selon size
      // Index 0 = score 10 (centre), index 9 = score 1 (extérieur)
      const allColors = [
        '#FFFFFF',
        '#FFFFFF', // Blanc (2, 1) - extérieur
        '#000000',
        '#000000', // Noir (4, 3)
        '#0088FF',
        '#0088FF', // Bleu (6, 5)
        '#FF0000',
        '#FF0000', // Rouge (8, 7)
        '#FFD700',
        '#FFD700', // Jaune (10, 9) - centre
      ];
      const allScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const numZones = Math.min(this.size, 10);

      for (let i = 10 - numZones; i < 10; i++) {
        const isBlackZone = allColors[i] === '#000000';
        this.zones.push({
          radius: ((this.targetSize / 2) * (10 - i)) / numZones,
          color: allColors[i],
          score: allScores[i],
          strokeColor: isBlackZone ? '#FFFFFF' : '#000000',
        });
      }
    }

    // Trier par rayon décroissant pour dessiner du plus grand au plus petit
    this.zones.sort((a, b) => b.radius - a.radius);
  }

  processArrows() {
    this.processedArrows = this.arrows.map((arrow, index) => {
      const value = arrow.value;
      const isLate = arrow.isLate;
      const spot = this.isSpottedArrow(arrow) ? arrow.spot : undefined;

      if (value === 0) {
        // Flèches manquées: placer autour de la cible
        const angle = (index * 60) % 360;
        const distance = this.targetSize / 2 + 40;
        return {
          value,
          x: this.centerX + Math.cos((angle * Math.PI) / 180) * distance,
          y: this.centerY + Math.sin((angle * Math.PI) / 180) * distance,
          angle: Math.random() * 360,
          isLate,
          spot,
        };
      }

      // Trouver la zone correspondante
      const zone = this.zones.find((z) => z.score === value);
      if (!zone) {
        return {
          value,
          x: this.centerX,
          y: this.centerY,
          angle: 0,
          isLate,
          spot,
        };
      }

      const nextZone = this.zones.find((z) => z.score === value + 1);
      const outerRadius = zone.radius;
      const innerRadius = nextZone ? nextZone.radius : 0;

      // Position aléatoire dans la zone (ou utiliser spot si disponible)
      let angle: number;
      let distance: number;

      if (spot !== undefined) {
        // Utiliser le spot pour positionner la flèche de manière déterministe
        angle = (spot * 137.5 * Math.PI) / 180; // Angle d'or pour répartition
        const radiusRange = outerRadius - innerRadius;
        const spotRatio = (spot % 10) / 10;
        distance = innerRadius + spotRatio * radiusRange;
      } else {
        // Position aléatoire
        angle = Math.random() * 2 * Math.PI;
        const radiusRange = outerRadius - innerRadius;
        distance = innerRadius + Math.random() * radiusRange;
      }

      return {
        value,
        x: this.centerX + Math.cos(angle) * distance,
        y: this.centerY + Math.sin(angle) * distance,
        angle: (angle * 180) / Math.PI,
        isLate,
        spot,
      };
    });
  }

  isSpottedArrow(arrow: Arrow | SpottedArrow): arrow is SpottedArrow {
    return 'spot' in arrow;
  }

  getArrowLineEnd(arrow: ProcessedArrow): { x: number; y: number } {
    const lineLength = 50;
    const dx = arrow.x - this.centerX;
    const dy = arrow.y - this.centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) {
      return { x: arrow.x + lineLength, y: arrow.y };
    }

    const unitX = dx / distance;
    const unitY = dy / distance;

    return {
      x: arrow.x + unitX * lineLength,
      y: arrow.y + unitY * lineLength,
    };
  }
}
