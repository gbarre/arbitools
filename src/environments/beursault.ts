import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const beursaultTables: TablesConfig = {
  distances: {
    name: 'Distances',
    description: 'Tableau des distances en tir beursault.',
    hint: 'Les distances sont données en mètres.',
    headers: {
      firstCell: 'Catégories',
      rows: ['U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: ['Arc Classique', 'Arc à Poulies', 'Arc droit', 'Arc Nu'],
    },
    data: [
      ['30', '30', '30', '30'],
      ['30', '30', '30', '30'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
      ['50', '50', '50', '50'],
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion U13/15
      { rowIndex: 0, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion U13/15
      { rowIndex: 0, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U13/15
      { rowIndex: 2, colIndex: 2, rowspan: 5, colspan: 1 }, // Fusion U18-S3
      { rowIndex: 2, colIndex: 3, rowspan: 5, colspan: 1 }, // Fusion U18-S3
    ],
  },
};

export const beursault = new Discipline('Tir beursault');
beursault.setTables(beursaultTables);
