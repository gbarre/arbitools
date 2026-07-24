import { Discipline } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

const tir3DTables: TablesConfig = {
  piquets: {
    name: 'Piquets',
    description:
      "Tableau d'attribution des piquets en tir 3D (piquet de la 1ère flèche / piquet de la 2ème flèche pour l'Arc Nu).",
    hint: "Arc Nu U11, Arc à Poulies Nu, Arc Droit, Arc Libre et Arc Chasse U13/U15 et Arc à Poulies Nu U18/U21 : jusqu'au niveau régional.",
    headers: {
      firstCell: 'Catégories / Piquets',
      rows: ['U11', 'U13', 'U15', 'U18', 'U21', 'S1', 'S2', 'S3'],
      columns: [
        'Arc Nu (BB)',
        'Poulies Nu (CO)',
        'Arc Droit (AD)',
        'Tir Libre (TL)',
        'Arc Chasse (AC)',
      ],
    },
    data: [
      ['Rose', 'disabled', 'disabled', 'disabled', 'disabled'], // U11
      ['Blanc', 'Blanc', 'Blanc', 'Bleu', 'Blanc'], // U13
      ['Blanc', 'Blanc', 'Blanc', 'Bleu', 'Blanc'], // U15
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // U18
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // U21
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S1
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S2
      ['Bleu', 'Bleu', 'Bleu', 'Rouge', 'Bleu'], // S3
    ],
    mergedCells: [
      { rowIndex: 1, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion CO U13/15
      { rowIndex: 1, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion AD U13/15
      { rowIndex: 1, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion TL U13/15
      { rowIndex: 1, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion AC U13/15
      { rowIndex: 3, colIndex: 0, rowspan: 2, colspan: 1 }, // Fusion BB U18/21
      { rowIndex: 3, colIndex: 1, rowspan: 2, colspan: 1 }, // Fusion CO U18/21
      { rowIndex: 3, colIndex: 2, rowspan: 2, colspan: 1 }, // Fusion AD U18/21
      { rowIndex: 3, colIndex: 3, rowspan: 2, colspan: 1 }, // Fusion TL U18/21
      { rowIndex: 3, colIndex: 4, rowspan: 2, colspan: 1 }, // Fusion AC U18/21
      { rowIndex: 5, colIndex: 1, rowspan: 3, colspan: 1 }, // Fusion CO S1-S3
    ],
  },
};

export const tir3D: Discipline = new Discipline('Tir 3D');
tir3D.setTables(tir3DTables);
