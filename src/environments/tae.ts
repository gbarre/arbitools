import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const TAETables: TablesConfig = {
  distances_internationales: {
    name: 'Distances Internationales',
    description:
      "Tableau des distances et tailles de blason en Tir À l'Extérieur <strong>Distances Internationales</strong> (TAEDI).",
    hint: "Les distances sont données en mètres. Les blasons sont donnés en centimètres, éventuellement avec une précision des zones marquantes (1-X).<br />U11 : jusqu'au niveau régional, hauteur du centre du blason à 1,10 m.<br />Senior 1 regroupe les U18, U21, S1, S2, S3 ayant tiré à la distance de la catégorie S1 pour le championnat de France Elite.",
    headers: {
      firstCell: 'Catégories',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Classique<br />Distances',
        'Arc Classique<br />Blasons',
        'Arc à Poulies<br />Distances',
        'Arc à Poulies<br />Blason',
      ],
    },
    data: [
      ['20', '80 (1-X)', 'disabled', 'disabled'],
      ['30', '80 (1-X)', '40', '80 (1-X)'],
      ['40', '80 (1-X)', '40', '80 (1-X)'],
      ['60', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['60', '122', '50', '80 (5-X)'],
    ],
  },
  distances_nationales: {
    name: 'Distances Nationales',
    description:
      "Tableau des distances et tailles de blason en Tir À l'Extérieur <strong>Distances Nationales</strong> (TAEDN).",
    hint: "Les distances sont données en mètres. Les blasons sont donnés en centimètres, éventuellement avec une précision des zones marquantes (1-X).<br />Jusqu'au niveau régional de U13 à U21 en Arc Classique et Arc à Poulies, et U15/U21 en Arc Nu. U11 : hauteur du centre du blason à 1,10 m.<br />En Arc Nu, seule la catégorie Seniors 2 est ouverte au niveau national.",
    headers: {
      firstCell: 'Catégories',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Classique<br />Distances',
        'Arc Classique<br />Blasons',
        'Arc Nu<br />Distances',
        'Arc Nu<br />Blasons',
        'Arc à Poulies<br />Distances',
        'Arc à Poulies<br />Blason',
      ],
    },
    data: [
      ['15', '80 (1-X)', 'disabled', 'disabled', 'disabled', 'disabled'],
      ['20', '80 (1-X)', '30', '80 (1-X)', '30', '80 (1-X)'],
      ['30', '80 (1-X)', '30', '80 (1-X)', '30', '80 (1-X)'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U13/15 Arc Nu
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U13/15 Arc Nu
      { rowIndex: 1, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion U13/15 Arc à Poulies
      { rowIndex: 1, colIndex: 5, rowspan: 2, colspan: 1 }, // Fusion U13/15 Arc à Poulies
      { rowIndex: 3, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U18/21 Arc Nu
      { rowIndex: 3, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U18/21 Arc Nu
      { rowIndex: 3, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion U18/21 Arc à Poulies
      { rowIndex: 3, colIndex: 5, rowspan: 2, colspan: 1 }, // Fusion U18/21 Arc à Poulies
      { rowIndex: 5, colIndex: 2, rowspan: 3, colspan: 1 }, // Fusion S1/S2/S3 Arc Nu
      { rowIndex: 5, colIndex: 3, rowspan: 3, colspan: 1 }, // Fusion S1/S2/S3 Arc Nu
    ],
  },
};

export const tae: Discipline = new Discipline("Tir À l'Extérieur");
tae.setTables(TAETables);
