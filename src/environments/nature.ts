import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const natureTables: TablesConfig = {
  distances: {
    name: 'Distances',
    description:
      'Tableau des distances en tir nature, toutes <strong>inconnues</strong>.',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>min - max</strong>". Par exemple : 12 - 18.',
    headers: {
      firstCell: 'Gibiers / Piquets',
      rows: ['Petit Animal', 'Petit Gibier', 'Moyen Gibier', 'Grand Gibier'],
      columns: ['Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['5 - 15', '5 - 15', '5 - 15'],
      ['5 - 15', '8 - 20', '15 - 25'],
      ['6 - 25', '13 - 30', '20 - 35'],
      ['16 - 30', '23 - 35', '30 - 40'],
    ],
  },
  piquets: {
    name: 'Piquets et temps',
    description:
      "Tableau d'attribution des piquets et temps de tir en tir nature.",
    hint: 'Temps en secondes et une ou plusieurs couleurs. Par exemple : "40 rose" ou " 80 - vert - gris".<br /><strong>TL U13/U15 jusqu\'au niveau régional.</strong>',
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Nu (BB)',
        'Tir Libre (TL)',
        'Poulies Nu (CO)',
        'Arc Droit (AD)',
        'Arc Chasse (AC)',
      ],
    },
    data: [
      ['45 - Blanc', '45 - Blanc', 'disabled', 'disabled', 'disabled'], // U13
      ['45 - Blanc', '45 - Blanc', 'disabled', 'disabled', 'disabled'], // U15
      [
        '45 - Bleu - Blanc',
        '45 - Bleu - Blanc',
        'disabled',
        'disabled',
        'disabled',
      ], // U18
      [
        '30 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '30 - Rouge - Bleu',
        '30 - Rouge - Bleu',
        '30 - Rouge - Bleu',
      ], // U21
      [
        '30 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '30 - Rouge - Bleu',
        '30 - Rouge - Bleu',
        '30 - Rouge - Bleu',
      ], // S1
      [
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
      ], // S2
      [
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
        '45 - Rouge - Bleu',
      ], // S3
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion U13/15 TL
    ],
  },
};

export const nature: Discipline = new Discipline('Tir nature');
nature.setTables(natureTables);
