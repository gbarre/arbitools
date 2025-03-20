import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const campagneTables: TablesConfig = {
  distances_inconnues: {
    name: 'Distances inconnues',
    description:
      'Tableau des distances <strong>inconnues</strong> en tir campagne.',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>min - max</strong>". Par exemple : 12 - 18.',
    headers: {
      firstCell: 'Blasons / Piquets',
      rows: ['20', '40', '60', '80'],
      columns: ['Orange', 'Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['disabled', '5 - 10', '5 - 10', '10 - 15'],
      ['disabled', '10 - 15', '10 - 20', '15 - 25'],
      ['15 - 25', '15 - 25', '15 - 30', '20 - 35'],
      ['20 - 30', '20 - 35', '30 - 45', '35 - 55'],
    ],
  },
  distances_connues: {
    name: 'Distances connues',
    description:
      'Tableau des distances <strong>connues</strong> en tir campagne.',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>d1 - d2 - d3</strong>". Par exemple : 12 - 18 - 24.',
    headers: {
      firstCell: 'Blasons / Piquets',
      rows: ['20', '40', '60', '80'],
      columns: ['Orange', 'Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['disabled', '5 - 10 - 15', '5 - 10 - 15', '10 - 15 - 20'],
      ['disabled', '10 - 15 - 20', '15 - 20 - 25', '20 - 25 - 30'],
      ['20 - 25 - 30', '20 - 25 - 30', '30 - 35 - 40', '35 - 40 - 45'],
      ['30 - 30 - 30', '30 - 35 - 40', '40 - 45 - 50', '50 - 55 - 60'],
    ],
  },
  piquets: {
    name: 'Attribution des piquets',
    description: "Tableau d'attribution des piquets en tir campagne.",
    hint: 'Une ou plusieurs couleurs. Par exemple : "rose" ou "vert - gris".',
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Nu (BB)',
        'Arc Classique (CL)',
        'Arc à Poulies (CO)',
        'Arc Droit (AD)',
        'Poulies Nu (APN)',
        'Arc Chasse (AC)',
      ],
    },
    data: [
      ['disabled', 'Blanc - Orange', 'Blanc', 'Blanc', 'disabled', 'disabled'], // U13
      ['Blanc', 'Blanc', 'Blanc', 'Blanc', 'disabled', 'disabled'], // U15
      ['Blanc', 'Bleu', 'Bleu', 'Blanc', 'disabled', 'disabled'], // U18
      ['Bleu', 'Rouge', 'Rouge', 'Blanc', 'disabled', 'disabled'], // U21
      ['Bleu', 'Rouge', 'Rouge', 'Blanc', 'Rouge', 'Rouge'], // S1
      ['Bleu', 'Rouge', 'Rouge', 'Blanc', 'disabled', 'disabled'], // S2
      ['Bleu', 'Rouge', 'Rouge', 'Blanc', 'disabled', 'disabled'], // S3
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 0, rowspan: 2, colspan: 1 }, // Fusion BB U15/18
      { rowIndex: 0, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion CO U13/15
      { rowIndex: 0, colIndex: 3, rowspan: 7, colspan: 1 }, // Fusion AD
      { rowIndex: 0, colIndex: 4, rowspan: 4, colspan: 1 }, // Fusion APN U13/15/18/21
      { rowIndex: 5, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion APN S2/3
      { rowIndex: 0, colIndex: 5, rowspan: 4, colspan: 1 }, // Fusion AC U13/15/18/21
      { rowIndex: 5, colIndex: 5, rowspan: 2, colspan: 1 }, // Fusion AC S2/3
    ],
  },
};

export const campagne: Discipline = new Discipline('Tir en campagne');
campagne.setTables(campagneTables);
