import { TablesConfig } from 'src/app/models/table.models';

export const natureTables: TablesConfig = {
  nature_distances_inconnues: {
    name: 'Nature distances inconnues',
    description: 'Tableau des distances inconnues en tir nature',
    hint: 'Les distances sont données en mètres, sous la forme "<strong>min - max</strong>". Par exemple : 12 - 18.',
    headers: {
      firstCell: 'Gibiers / Piquets',
      rows: ['Petit Animal', 'Petit Gibier', 'Moyen Gibier', 'Grand Gibier'],
      columns: ['Blanc', 'Bleu', 'Rouge'],
    },
    data: [
      ['5 - 15', '5 - 15', '5 - 15'],
      ['5 - 15', '8 - 20', '15 - 25'],
      ['6 - 25', '13 - 30', '20 - 35'],
      ['16 - 30', '23 - 35', '30 - 40'],
    ],
  },
};
