import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const optionsList = {
  certificats_medicaux: [
    'Pas de certificat', // 0
    'Avec certificat du médecin traitant', // 1
    'Avec certificat du médecin agréé FFTA, si plus de 18# marquées', // 2
    'Avec certificat du médecin agréé FFTA', // 3
    'Avec certificat de surclassement du médecin agréé FFTA', // 4
  ],
  oui_non: [
    'Non', // 0
    "Oui, jusqu'au championnat de Région inclus", // 1
    'Oui', // 2
  ],
};

const generalTables: TablesConfig = {
  u11: {
    name: 'U11',
    description:
      "Tableau de synthèse de la pratique du tir à l'arc pour les jeunes de moins de 11 ans (U11).",
    headers: {
      firstCell: '',
      rows: [
        "U11<br />jusqu'à <strong>7 ans</strong>",
        'U11<br />de <strong>8, 9<br />et 10 ans</strong>',
        'U11<br />10 ans, CL',
        'U11<br />10 ans, CO / Libre',
        'U11<br />10 ans, BB',
        'U11<br />10 ans, APN',
        'U11<br />10 ans, AD',
        'U11<br />10 ans, Arc Chasse',
      ],
      columns: [
        'Certificats médicaux',
        '18m',
        '25m',
        'TAEI',
        'TAEN',
        'Beursault',
        'Campagne',
        'Nature',
        '3D',
      ],
    },
    data: [
      [
        // U11 jusqu'à 7 ans
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
      ],
      [
        // U11 de 8, 9 et 10 ans
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[1],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[1],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
      ],
      [
        // U11 10 ans, CL
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        'disabled',
        'disabled',
      ],
      [
        // U11 10 ans, CO / Libre
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[0],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
      ],
      [
        // U11 10 ans, BB
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        'disabled',
        'disabled',
        'disabled',
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        'disabled',
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
      ],
      [
        // U11 10 ans, APN
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
      ],
      [
        // U11 10 ans, AD
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        {
          options: optionsList.oui_non,
          correct: optionsList.oui_non[2],
        },
        'disabled',
        'disabled',
      ],
      [
        // U11 10 ans, Arc Chasse
        {
          options: optionsList.certificats_medicaux,
          correct: optionsList.certificats_medicaux[4],
        },
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
        'disabled',
      ],
    ],
  },
  fleches_progression_1: {
    name: 'Flèches de progression',
    description: 'Tableau des flèches de progression.',
    hint: 'Les distances sont données en mètres, les tailles de blason en centimètres. Le nobre de flèches et le score à réaliser sont des valeurs numériques.',
    headers: {
      firstCell: 'Flèches',
      rows: ['Blanche', 'Noire', 'Bleue', 'Rouge', 'Jaune'],
      columns: ['Distance', 'Blason', 'Nombre de flèches', 'Score à réaliser'],
    },
    data: [
      ['10', '80', '36', '280'],
      ['15', '80', '36', '280'],
      ['20', '80', '36', '280'],
      ['25', '80', '36', '280'],
      ['30', '80', '36', '280'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 2, rowspan: 5, colspan: 1 }, // Fusion des flèches
      { rowIndex: 0, colIndex: 3, rowspan: 5, colspan: 1 }, // Fusion des scores
    ],
  },
  fleches_progression_2_classiqueS: {
    name: 'Flèches de progression (Arcs classiques)',
    description: 'Tableau des flèches de progression pour les arcs classiques.',
    hint: 'Les distances sont données en mètres, les tailles de blason en centimètres. Le nobre de flèches et le score à réaliser sont des valeurs numériques.',
    headers: {
      firstCell: 'Flèches',
      rows: ['Bronze', 'Argent', 'Or'],
      columns: ['Distance', 'Blason', 'Nombre de flèches', 'Score à réaliser'],
    },
    data: [
      ['40', '80', '36', '280'],
      ['60', '122', '36', '280'],
      ['70', '122', '36', '280'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 2, rowspan: 5, colspan: 1 }, // Fusion des flèches
    ],
  },
  fleches_progression_2_poulies: {
    name: 'Flèches de progression (Arcs à poulies)',
    description: 'Tableau des flèches de progression pour les arcs à poulies.',
    hint: 'Les distances sont données en mètres, les tailles de blason en centimètres. Le nobre de flèches et le score à réaliser sont des valeurs numériques.',
    headers: {
      firstCell: 'Flèches',
      rows: ['Bronze', 'Argent', 'Or'],
      columns: ['Distance', 'Blason', 'Nombre de flèches', 'Score à réaliser'],
    },
    data: [
      ['40', '80', '36', '310'],
      ['50', '80', '36', '310'],
      ['50', '80', '36', '330'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 2, rowspan: 5, colspan: 1 }, // Fusion des flèches
    ],
  },
};

export const reglements_generaux: Discipline = new Discipline(
  'Règlements généraux'
);
reglements_generaux.setTables(generalTables);
