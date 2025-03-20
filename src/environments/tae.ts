import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const TAETables: TablesConfig = {
  distances_internationales: {
    name: 'Distances Internationales',
    description:
      "Tableau des distances et tailles de blason en Tir À l'Extérieur <strong>Distances Internationales</strong> (TAEDI).",
    hint: 'Les distances sont données en mètres. Les blasons sont donnés en centimètres, éventuellement avec une précision des zones marquantes (1-X).',
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
      ['30', '80 (1-X)', 'disabled', 'disabled'],
      ['40', '80 (1-X)', 'disabled', 'disabled'],
      ['60', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['70', '122', '50', '80 (5-X)'],
      ['60', '122', '50', '80 (5-X)'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 2, rowspan: 3, colspan: 1 }, // Fusion des disabled
      { rowIndex: 0, colIndex: 3, rowspan: 3, colspan: 1 }, // Fusion des disabled
    ],
  },
  distances_nationales: {
    name: 'Distances Nationales',
    description:
      "Tableau des distances et tailles de blason en Tir À l'Extérieur <strong>Distances Nationales</strong> (TAEDN).",
    hint: "Les distances sont données en mètres. Les blasons sont donnés en centimètres, éventuellement avec une précision des zones marquantes (1-X).<br />Jusqu'au niveau régional de U13 à U21 en Arc Classique et Arc à Poulies ; et U18 en Arc Nu.",
    headers: {
      firstCell: 'Catégories',
      rows: ['U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
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
      ['20', '80 (1-X)', 'disabled', 'disabled', '30', '80 (1-X)'],
      ['30', '80 (1-X)', '30', '80 (1-X)', '30', '80 (1-X)'],
      ['50', '122', '30', '80 (1-X)', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
      ['50', '122', '50', '122', '50', '122'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion U13/15 CO
      { rowIndex: 0, colIndex: 5, rowspan: 2, colspan: 1 }, // Fusion U13/15 CO
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U15/18 BB
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U15/18 BB
      { rowIndex: 3, colIndex: 2, rowspan: 4, colspan: 1 }, // Fusion adultes BB
      { rowIndex: 3, colIndex: 3, rowspan: 4, colspan: 1 }, // Fusion adultes BB
    ],
  },
};

export const tae: Discipline = new Discipline("Tir À l'Extérieur");
tae.setTables(TAETables);
