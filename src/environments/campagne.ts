import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const campagneTables: TablesConfig = {
  distances_inconnues: {
    name: 'Distances inconnues',
    description:
      'Tableau des distances <strong>inconnues</strong> en tir campagne.',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>min - max</strong>". Par exemple : 12 - 18.<br />Piquet Rose : U11. Piquet Blanc : également utilisé par le piquet Orange pour les U13 (20 - 30 sur blason de 80cm).',
    headers: {
      firstCell: 'Blasons / Piquets',
      rows: ['20', '40', '60', '80'],
      columns: ['Rose', 'Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['5 - 10', '5 - 10', '5 - 10', '10 - 15'],
      ['5 - 15', '10 - 15', '10 - 20', '15 - 25'],
      ['10 - 15', '15 - 25', '15 - 30', '20 - 35'],
      ['15 - 20', '20 - 35', '30 - 45', '35 - 55'],
    ],
  },
  distances_connues: {
    name: 'Distances connues',
    description:
      'Tableau des distances <strong>connues</strong> en tir campagne.',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>d1 - d2 - d3</strong>". Par exemple : 12 - 18 - 24.<br />Piquet Rose : U11. Piquet Blanc : également utilisé par le piquet Orange pour les U13 (30 - 30 - 30 sur blason de 80cm).',
    headers: {
      firstCell: 'Blasons / Piquets',
      rows: ['20', '40', '60', '80'],
      columns: ['Rose', 'Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['5 - 5 - 10', '5 - 10 - 15', '5 - 10 - 15', '10 - 15 - 20'],
      ['10 - 10 - 15', '10 - 15 - 20', '15 - 20 - 25', '20 - 25 - 30'],
      ['15 - 15 - 20', '20 - 25 - 30', '30 - 35 - 40', '35 - 40 - 45'],
      ['20 - 20 - 20', '30 - 35 - 40', '40 - 45 - 50', '50 - 55 - 60'],
    ],
  },
  piquets: {
    name: 'Attribution des piquets',
    description: "Tableau d'attribution des piquets en tir campagne.",
    hint: 'Une ou plusieurs couleurs. Par exemple : "rose" ou "vert - gris".<br />Arc Classique U11, Arc à Poulies et Arc Droit U13/U15, Arc Droit U18/U21 : jusqu\'au niveau régional.',
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Classique (CL)',
        'Arc Nu (BB)',
        'Arc à Poulies (CO)',
        'Arc Droit (AD)',
      ],
    },
    data: [
      ['Rose', 'disabled', 'disabled', 'disabled'], // U11
      ['Blanc - Orange', 'Blanc - Orange', 'Blanc', 'Blanc - Orange'], // U13
      ['Blanc', 'Blanc - Orange', 'Blanc', 'Blanc - Orange'], // U15
      ['Bleu', 'Bleu', 'Rouge', 'Blanc'], // U18
      ['Rouge', 'Bleu', 'Rouge', 'Blanc'], // U21
      ['Rouge', 'Rouge', 'Rouge', 'Blanc'], // S1
      ['Rouge', 'Rouge', 'Rouge', 'Blanc'], // S2
      ['Rouge', 'Rouge', 'Rouge', 'Blanc'], // S3
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion Arc Nu U13/15
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion Poulies U13/15
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion Droit U13/15
      { rowIndex: 3, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion Arc Nu U18/21
      { rowIndex: 3, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion Poulies U18/21
      { rowIndex: 3, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion Droit U18/21
      { rowIndex: 5, colIndex: 3, rowspan: 3, colspan: 1 }, // Fusion Droit S1/S2/S3
    ],
  },
};

export const campagne: Discipline = new Discipline('Tir en campagne');
campagne.setTables(campagneTables);

export const scores_campagne = {
  trispot: {
    min: 1,
    max: 6,
    arrows: 3,
  },
  monospot: {
    min: 1,
    max: 6,
    arrows: 3,
  },
};
