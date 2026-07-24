import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const optionsList = {
  oui_non: [
    'Non', // 0
    "Oui, jusqu'au championnat de Région inclus", // 1
    'Oui', // 2
  ],
};

const generalTables: TablesConfig = {
  u11_pratique: {
    name: 'U11 - Pratique',
    description:
      "Tableau de synthèse de la pratique du tir à l'arc chez les U11.",
    hint: '"Oui" pour les U11 de 8, 9 et 10 ans signifie : jusqu\'au championnat de Région inclus.',
    headers: {
      firstCell: '',
      rows: [
        "U11<br />jusqu'à <strong>7 ans</strong>",
        'U11<br />de <strong>8, 9<br />et 10 ans</strong>',
      ],
      columns: [
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
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
      ],
      [
        // U11 de 8, 9 et 10 ans
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[1] },
      ],
    ],
  },
  u11_surclasse: {
    name: 'U11 surclassés en U13',
    description:
      "Tableau de synthèse de la pratique du tir à l'arc chez les U11 en dernière année (10 ans) surclassés en U13.",
    hint: 'Certificat médical de surclassement établi par un médecin du sport nécessaire pour toutes ces pratiques.',
    headers: {
      firstCell: '',
      rows: [
        'Arc Classique',
        'Arc à Poulies / Arc Libre',
        'Arc Nu',
        'Arc à Poulies Nu',
        'Arc Droit',
        'Arc Chasse',
      ],
      columns: [
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
        // Arc Classique
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
      ],
      [
        // Arc à Poulies / Arc Libre
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
      ],
      [
        // Arc Nu
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
      ],
      [
        // Arc à Poulies Nu
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
      ],
      [
        // Arc Droit
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[2] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
      ],
      [
        // Arc Chasse
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
        { options: optionsList.oui_non, correct: optionsList.oui_non[0] },
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
      ['10', '80', '6 x 6 flèches', '280'],
      ['15', '80', '6 x 6 flèches', '280'],
      ['20', '80', '6 x 6 flèches', '280'],
      ['25', '80', '6 x 6 flèches', '280'],
      ['30', '80', '6 x 6 flèches', '280'],
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
      ['40', '80', '6 x 6 flèches', '280'],
      ['60', '122', '6 x 6 flèches', '280'],
      ['70', '122', '6 x 6 flèches', '280'],
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
  'Règlements généraux',
);
reglements_generaux.setTables(generalTables);
