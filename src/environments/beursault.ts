import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const beursaultTables: TablesConfig = {
  distances: {
    name: 'Distances',
    description: 'Tableau des distances en tir beursault.',
    hint: 'Les distances sont données en mètres.<br />Arc à Poulies, Arc Droit et Arc Nu : distances U13/U15 jusqu\'au niveau régional.',
    headers: {
      firstCell: 'Catégories',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: ['Arc Classique', 'Arc à Poulies', 'Arc Droit', 'Arc Nu'],
    },
    data: [
      ['disabled', 'disabled', 'disabled', 'disabled'],
      ['30', '30', '30', '30'],
      ['30', '30', '30', '30'],
      ['50', '50', '30', '30'],
      ['50', '50', '30', '30'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion U13/15 Poulies
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U13/15 Droit
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U13/15 Nu
      { rowIndex: 3, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion U18/21 Poulies
      { rowIndex: 3, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U18/21 Droit
      { rowIndex: 3, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U18/21 Nu
      { rowIndex: 5, colIndex: 2, rowspan: 3, colspan: 1 }, // Fusion S1-S3 Droit
      { rowIndex: 5, colIndex: 3, rowspan: 3, colspan: 1 }, // Fusion S1-S3 Nu
    ],
  },
};

export const beursault = new Discipline('Tir beursault');
beursault.setTables(beursaultTables);
