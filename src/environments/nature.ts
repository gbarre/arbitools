import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const natureTables: TablesConfig = {
  distances: {
    name: 'Distances',
    description:
      'Tableau des distances en tir nature, toutes <strong>inconnues</strong>.',
    hint: 'Pour le Piquet Rouge, les distances sont données en mètres, sous la forme "<strong>min - max</strong>". Pour les Piquets Bleu, Blanc et Rose, seule la distance maximale est donnée (en mètres).',
    headers: {
      firstCell: 'Gibiers / Piquets',
      rows: [
        'Grands gibiers',
        'Moyens gibiers',
        'Petits gibiers',
        'Petits animaux',
      ],
      columns: ['Rouge', 'Bleu', 'Blanc', 'Rose'],
    },
    data: [
      ['30 - 40', '35', '30', '20'],
      ['20 - 35', '30', '25', '15'],
      ['15 - 25', '20', '15', '10'],
      ['5 - 15', '15', '15', '10'],
    ],
  },
  piquets: {
    name: 'Piquets',
    description:
      "Tableau d'attribution des piquets en tir nature (piquet de la 1ère flèche / piquet de la 2ème flèche).",
    hint: 'Une ou plusieurs couleurs, séparées par un tiret. Par exemple : "rose - rose" ou "rouge - bleu".<br />Temps de tir : 45 secondes pour toutes les catégories.<br />Arc Nu U11, Arc à Poulies Nu et Arc Droit et Arc Libre et Arc Chasse U13/U15, Arc à Poulies Nu U18/U21 : jusqu\'au niveau régional.',
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Nu (BB)',
        'Arc à Poulies Nu (Co)',
        'Arc Droit (AD)',
        'Arc Libre (TL)',
        'Arc Chasse (AC)',
      ],
    },
    data: [
      ['Rose - Rose', 'disabled', 'disabled', 'disabled', 'disabled'], // U11
      [
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
      ], // U13
      [
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
        'Blanc - Blanc',
      ], // U15
      [
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
      ], // U18
      [
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
      ], // U21
      [
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
      ], // S1
      [
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
      ], // S2
      [
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
        'Rouge - Bleu',
      ], // S3
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion Co U13/15
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion AD U13/15
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion TL U13/15
      { rowIndex: 1, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion AC U13/15
      { rowIndex: 3, colIndex: 0, rowspan: 2, colspan: 1 }, // Fusion BB U18/21
      { rowIndex: 3, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion Co U18/21
      { rowIndex: 3, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion AD U18/21
      { rowIndex: 3, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion TL U18/21
      { rowIndex: 3, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion AC U18/21
      { rowIndex: 5, colIndex: 1, rowspan: 3, colspan: 1 }, // Fusion Co S1-S3
    ],
  },
};

export const nature: Discipline = new Discipline('Tir nature');
nature.setTables(natureTables);
