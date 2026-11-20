import { Table } from 'src/app/models/table.models';
import { environment } from './environments';

/**
 * Dans les tableaux par catégorie d'âge, une fusion verticale de cellules
 * représente un regroupement de catégories au classement (ex. « U15 (U13 et
 * U15) »), et non une simple égalité de valeurs.
 *
 * Ce test fige, pour chaque colonne, les regroupements attendus d'après le
 * règlement sportif FFTA (version du 31/08/2026, saison 2027).
 * Une colonne absente de l'objet attendu ne doit comporter aucune fusion.
 */

type Groups = Record<string, [string, string][]>;

const U13_U15: [string, string] = ['U13', 'U15'];
const U18_U21: [string, string] = ['U18', 'U21'];
const S1_S3: [string, string] = ['S1', 'S3'];

const expectedGroups: Record<string, { source: string; groups: Groups }> = {
  // Tir à 18 m – A.7.1.2 (p. 236) et classement national (p. 52)
  'salle/blasons': {
    source: 'Tir à 18 m, A.7.1.2 p. 236 / p. 52',
    groups: {
      'Arc à Poulies<br />18m': [U13_U15],
      'Arc à Poulies<br />25m': [U13_U15],
      'Arc Nu<br />18m': [U13_U15, U18_U21, S1_S3],
      'Arc Nu<br />25m': [U13_U15, U18_U21, S1_S3],
    },
  },
  // TAE – tableaux A.7.1 (p. 121)
  // NB : le tableau des catégories p. 52 donne « U15 (U13 et U15) » en arc à
  // poulies distances internationales et sépare U18 et U21 en distances
  // nationales. Le règlement se contredit : on suit ici le tableau p. 121.
  'tae/distances_internationales': {
    source: 'TAE, A.7.1 p. 121',
    groups: {},
  },
  'tae/distances_nationales': {
    source: 'TAE, A.7.1 p. 121',
    groups: {
      'Arc Nu<br />Distances': [U13_U15, U18_U21, S1_S3],
      'Arc Nu<br />Blasons': [U13_U15, U18_U21, S1_S3],
      'Arc à Poulies<br />Distances': [U13_U15, U18_U21],
      'Arc à Poulies<br />Blason': [U13_U15, U18_U21],
    },
  },
  // Beursault – C.5.5 (p. 223)
  'beursault/distances': {
    source: 'Beursault, C.5.5 p. 223',
    groups: {
      'Arc à Poulies': [U13_U15, U18_U21],
      'Arc Droit': [U13_U15, U18_U21, S1_S3],
      'Arc Nu': [U13_U15, U18_U21, S1_S3],
    },
  },
  // Tir en campagne – classement national (p. 52)
  'campagne/piquets': {
    source: 'Tir en campagne, p. 52',
    groups: {
      'Arc Nu (BB)': [U13_U15, U18_U21],
      'Arc à Poulies (CO)': [U13_U15, U18_U21],
      'Arc Droit (AD)': [U13_U15, U18_U21, S1_S3],
    },
  },
  // Parcours nature – classement national (p. 52)
  'nature/piquets': {
    source: 'Parcours nature et 3D, p. 52',
    groups: {
      'Arc Nu (BB)': [U18_U21],
      'Arc à Poulies Nu (Co)': [U13_U15, U18_U21, S1_S3],
      'Arc Droit (AD)': [U13_U15, U18_U21],
      'Arc Libre (TL)': [U13_U15, U18_U21],
      'Arc Traditionnel (AC)': [U13_U15, U18_U21],
    },
  },
  // Tir 3D – classement national (p. 52)
  'tir3D/piquets': {
    source: 'Parcours nature et 3D, p. 52',
    groups: {
      'Arc Nu (BB)': [U18_U21],
      'Poulies Nu (CO)': [U13_U15, U18_U21, S1_S3],
      'Arc Droit (AD)': [U13_U15, U18_U21],
      'Tir Libre (TL)': [U13_U15, U18_U21],
      'Arc Traditionnel (AC)': [U13_U15, U18_U21],
    },
  },
};

function getTable(path: string): Table {
  const [disciplineKey, tableKey] = path.split('/');
  const table = environment.disciplines[disciplineKey]?.getTables()[tableKey];
  if (!table) {
    throw new Error(`Tableau introuvable : ${path}`);
  }
  return table;
}

/** Regroupements effectifs d'un tableau, colonne par colonne. */
function actualGroups(table: Table): Groups {
  const groups: Groups = {};
  for (const m of table.mergedCells ?? []) {
    expect(m.colspan, 'fusion horizontale inattendue').toBe(1);
    const column = table.headers.columns[m.colIndex];
    const range: [string, string] = [
      table.headers.rows[m.rowIndex],
      table.headers.rows[m.rowIndex + m.rowspan - 1],
    ];
    (groups[column] ??= []).push(range);
  }
  for (const column of Object.keys(groups)) {
    groups[column].sort(
      (a, b) =>
        table.headers.rows.indexOf(a[0]) - table.headers.rows.indexOf(b[0])
    );
  }
  return groups;
}

describe('Regroupements de catégories conformes au règlement', () => {
  describe.each(Object.entries(expectedGroups))(
    '%s',
    (path, { source, groups }) => {
      it(`suit le règlement (${source})`, () => {
        const table = getTable(path);
        for (const column of Object.keys(groups)) {
          expect(table.headers.columns, `colonne attendue`).toContain(column);
        }
        expect(actualGroups(table)).toEqual(groups);
      });
    }
  );

  it('couvre tous les tableaux par catégorie d’âge', () => {
    const categoryTables = Object.entries(environment.disciplines).flatMap(
      ([disciplineKey, discipline]) =>
        Object.entries(discipline.getTables())
          .filter(([, table]) => table.headers.rows.includes('U13'))
          .map(([tableKey]) => `${disciplineKey}/${tableKey}`)
    );
    expect(categoryTables.sort()).toEqual(Object.keys(expectedGroups).sort());
  });
});
