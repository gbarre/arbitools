import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const salleTables: TablesConfig = {
  blasons: {
    name: 'Blasons',
    description: 'Tableau des blasons pour le tir à 18m et à 25m.',
    hint: 'Les tailles des blasons sont donnés en centimètres. On précisera le type de blason : <ul><li><em>unique</em> (U)</li><li><em>trispot (incluant Vegas)</em> (T)</li><li>voire les deux (U/T)</li></ul>',
    headers: {
      firstCell: 'Catégories',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Classique<br />18m',
        'Arc Classique<br />25m',
        'Arc à Poulies<br />18m',
        'Arc à Poulies<br />25m',
        'Arc Nu<br />18m',
        'Arc Nu<br />25m',
      ],
    },
    data: [
      ['80 (U)', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled'], // U11
      ['60 (U/T)', '80 (U/T)', '40 (T)', '60 (T)', 'disabled', 'disabled'], // U13
      ['60 (U/T)', '80 (U/T)', '40 (T)', '60 (T)', '60 (U/T)', '80 (U/T)'], // U15
      ['40 (U/T)', '60 (U/T)', '40 (T)', '60 (T)', '60 (U/T)', '80 (U/T)'], // U18
      ['40 (U/T)', '60 (U/T)', '40 (T)', '60 (T)', '40 (U/T)', '60 (U/T)'], // U21
      ['40 (U/T)', '60 (U/T)', '40 (T)', '60 (T)', '40 (U/T)', '60 (U/T)'], // S1
      ['40 (U/T)', '60 (U/T)', '40 (T)', '60 (T)', '40 (U/T)', '60 (U/T)'], // S2
      ['40 (U/T)', '60 (U/T)', '40 (T)', '60 (T)', '40 (U/T)', '60 (U/T)'], // S3
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 0, rowspan: 2, colspan: 1 }, // Fusion CL U13/15 18m
      { rowIndex: 1, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion CL U13/15 25m
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion CO U13/15 18m
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion CO U13/15 25m
      { rowIndex: 2, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion CO U15/18 18m
      { rowIndex: 2, colIndex: 5, rowspan: 2, colspan: 1 }, // Fusion CO U15/18 25m
      { rowIndex: 3, colIndex: 0, rowspan: 5, colspan: 1 }, // Fusion CL U18-S3 18m
      { rowIndex: 3, colIndex: 1, rowspan: 5, colspan: 1 }, // Fusion CL U18-S3 25m
      { rowIndex: 3, colIndex: 2, rowspan: 5, colspan: 1 }, // Fusion CO U18-S3 18m
      { rowIndex: 3, colIndex: 3, rowspan: 5, colspan: 1 }, // Fusion CO U18-S3 25m
      { rowIndex: 4, colIndex: 4, rowspan: 4, colspan: 1 }, // Fusion CO U21-S3 18m
      { rowIndex: 4, colIndex: 5, rowspan: 4, colspan: 1 }, // Fusion CO U21-S3 25m
    ],
  },
};

export const salle: Discipline = new Discipline('Tir en salle');
salle.setTables(salleTables);

export const scores_salle = {
  trispot: {
    min: 0,
    max: 10,
    arrows: 3,
  },
};
