import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const tir3DTables: TablesConfig = {
  piquets: {
    name: 'Piquets',
    description: "Tableau d'attribution des piquets en tir 3D.",
    hint: "U13 et U15 TL ouverts jusqu'au niveau régional",
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Nu (BB)',
        'Poulies Nu (CO)',
        'Arc Droit (AD)',
        'Tir Libre (TL)',
        'Arc Chasse (AC)',
      ],
    },
    data: [
      ['Blanc', 'disabled', 'disabled', 'Bleu', 'disabled'], // U13
      ['Blanc', 'disabled', 'disabled', 'Bleu', 'disabled'], // U15
      ['Bleu', 'disabled', 'disabled', 'Bleu', 'disabled'], // U18
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // U21
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S1
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S1
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S3
    ],
    mergedCells: [
      { rowIndex: 0, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion U13/15 TL
    ],
  },
};

export const tir3D: Discipline = new Discipline('Tir 3D');
tir3D.setTables(tir3DTables);
