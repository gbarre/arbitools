import { Table } from 'src/app/models/table.models';
import { environment } from './environments';

/**
 * Vérifie la cohérence structurelle de tous les tableaux déclarés dans les
 * disciplines : dimensions, cellules fusionnées et format des cellules.
 */

const allTables: [string, Table][] = Object.entries(
  environment.disciplines
).flatMap(([disciplineKey, discipline]) =>
  Object.entries(discipline.getTables()).map(
    ([tableKey, table]) => [`${disciplineKey}/${tableKey}`, table] as [string, Table]
  )
);

describe('Tableaux des disciplines', () => {
  it('déclare au moins un tableau', () => {
    expect(allTables.length).toBeGreaterThan(0);
  });

  describe.each(allTables)('%s', (_name, table) => {
    const nbRows = table.headers.rows.length;
    const nbCols = table.headers.columns.length;
    const merges = table.mergedCells ?? [];

    it('a un nom et des en-têtes', () => {
      expect(table.name).toBeTruthy();
      expect(nbRows).toBeGreaterThan(0);
      expect(nbCols).toBeGreaterThan(0);
    });

    it('a autant de lignes de données que d’en-têtes de ligne', () => {
      expect(table.data.length).toBe(nbRows);
    });

    it('a autant de cellules par ligne que d’en-têtes de colonne', () => {
      table.data.forEach((row, i) => {
        expect(row.length, `ligne ${table.headers.rows[i]}`).toBe(nbCols);
      });
    });

    it('ne contient que des cellules texte ou des listes de choix valides', () => {
      table.data.forEach((row, i) =>
        row.forEach((cell, j) => {
          const where = `${table.headers.rows[i]} / ${table.headers.columns[j]}`;
          if (typeof cell === 'string') {
            expect(cell.trim(), where).not.toBe('');
          } else {
            expect(Array.isArray(cell.options), where).toBe(true);
            expect(cell.options, where).toContain(cell.correct);
          }
        })
      );
    });

    it('a des fusions de cellules dans les limites du tableau', () => {
      merges.forEach((m) => {
        expect(m.rowspan).toBeGreaterThanOrEqual(1);
        expect(m.colspan).toBeGreaterThanOrEqual(1);
        expect(m.rowspan * m.colspan).toBeGreaterThan(1);
        expect(m.rowIndex).toBeGreaterThanOrEqual(0);
        expect(m.colIndex).toBeGreaterThanOrEqual(0);
        expect(m.rowIndex + m.rowspan).toBeLessThanOrEqual(nbRows);
        expect(m.colIndex + m.colspan).toBeLessThanOrEqual(nbCols);
      });
    });

    it('n’a pas de fusions qui se chevauchent', () => {
      const covered = new Map<string, number>();
      merges.forEach((m, idx) => {
        for (let r = m.rowIndex; r < m.rowIndex + m.rowspan; r++) {
          for (let c = m.colIndex; c < m.colIndex + m.colspan; c++) {
            const key = `${r},${c}`;
            expect(
              covered.has(key),
              `cellule (${r}, ${c}) fusionnée par #${covered.get(key)} et #${idx}`
            ).toBe(false);
            covered.set(key, idx);
          }
        }
      });
    });

    it('a la même valeur dans toutes les cellules d’une fusion', () => {
      merges.forEach((m) => {
        const reference = table.data[m.rowIndex][m.colIndex];
        for (let r = m.rowIndex; r < m.rowIndex + m.rowspan; r++) {
          for (let c = m.colIndex; c < m.colIndex + m.colspan; c++) {
            expect(
              table.data[r][c],
              `${table.headers.rows[r]} / ${table.headers.columns[c]}`
            ).toEqual(reference);
          }
        }
      });
    });
  });
});
