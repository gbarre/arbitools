import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Table } from '../models/table.models';
import { environment } from 'src/environments/environments';
import { TableCheckerComponent } from './table-checker.component';

const sampleTable: Table = {
  name: 'Exemple',
  description: 'Tableau de test',
  headers: {
    firstCell: 'Catégories',
    rows: ['U13', 'U15', 'U18'],
    columns: ['Arc A', 'Arc B', 'Choix'],
  },
  data: [
    ['60 (U)', 'Blanc - Orange', { options: ['Oui', 'Non'], correct: 'Oui' }],
    ['60 (U/T)', 'Blanc - Orange', { options: ['Oui', 'Non'], correct: 'Non' }],
    ['disabled', 'Bleu', { options: ['Oui', 'Non'], correct: 'Non' }],
  ],
  mergedCells: [{ rowIndex: 0, colIndex: 1, rowspan: 2, colspan: 1 }],
};

describe('TableCheckerComponent (logique)', () => {
  let component: TableCheckerComponent;

  beforeEach(() => {
    component = new TableCheckerComponent();
    component.selectedTable = sampleTable;
    component.ngOnChanges();
  });

  it('initialise les dimensions et des réponses vides', () => {
    expect(component.nbRows).toBe(3);
    expect(component.nbCols).toBe(3);
    expect(component.answers).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    expect(component.results.flat().every((r) => r === '')).toBe(true);
  });

  it('accepte une réponse sans tenir compte de la casse, des espaces ni des tirets', () => {
    component.answers[0][0] = '60(u)';
    component.answers[0][1] = 'blanc orange';
    component.answers[1][0] = ' 60 ( U/T ) ';
    component.checkAnswers();
    expect(component.results[0][0]).toBe('correct');
    expect(component.results[0][1]).toBe('correct');
    expect(component.results[1][0]).toBe('correct');
  });

  it('refuse une mauvaise réponse', () => {
    component.answers[0][0] = '80 (U)';
    component.answers[2][1] = 'Rouge';
    component.checkAnswers();
    expect(component.results[0][0]).toBe('incorrect');
    expect(component.results[2][1]).toBe('incorrect');
  });

  it('considère toujours une cellule « disabled » comme correcte', () => {
    component.checkAnswers();
    expect(component.results[2][0]).toBe('correct');
  });

  it('compare exactement le choix d’une liste déroulante', () => {
    component.answers[0][2] = 'Oui';
    component.answers[1][2] = 'Oui';
    component.checkAnswers();
    expect(component.results[0][2]).toBe('correct');
    expect(component.results[1][2]).toBe('incorrect');
  });

  it('réinitialise réponses et résultats', () => {
    component.answers[0][0] = '60 (U)';
    component.checkAnswers();
    component.reset();
    expect(component.answers.flat().every((a) => a === '')).toBe(true);
    expect(component.results.flat().every((r) => r === '')).toBe(true);
  });

  it('identifie les cellules fusionnées', () => {
    expect(component.isFirstMergedCell(0, 1)).toBe(true);
    expect(component.isFirstMergedCell(1, 1)).toBe(false);
    expect(component.hideMergedCell(0, 1)).toBe(true);
    expect(component.hideMergedCell(1, 1)).toBe(true);
    expect(component.hideMergedCell(2, 1)).toBe(false);
    expect(component.getMergedCell(1, 1)).toEqual({ rowspan: 2, colspan: 1 });
    expect(component.getMergedCell(0, 0)).toBeNull();
  });
});

const realTables: [string, Table][] = Object.entries(
  environment.disciplines
).flatMap(([d, discipline]) =>
  Object.entries(discipline.getTables()).map(
    ([t, table]) => [`${d}/${t}`, table] as [string, Table]
  )
);

describe('TableCheckerComponent (rendu)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCheckerComponent],
      imports: [FormsModule],
    });
  });

  function render(table: Table, quizzMode: boolean) {
    const fixture = TestBed.createComponent(TableCheckerComponent);
    fixture.componentRef.setInput('selectedTable', table);
    fixture.componentRef.setInput('quizzMode', quizzMode);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  describe.each(realTables)('%s', (_name, table) => {
    const merges = table.mergedCells ?? [];
    const hiddenCells = merges.reduce(
      (sum, m) => sum + m.rowspan * m.colspan - 1,
      0
    );
    const expectedCells =
      table.headers.rows.length * table.headers.columns.length - hiddenCells;

    it.each([true, false])(
      'affiche une cellule par case non masquée (mode quiz : %s)',
      (quizzMode) => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const el = render(table, quizzMode);

        expect(el.querySelectorAll('tbody tr').length).toBe(
          table.headers.rows.length
        );
        expect(el.querySelectorAll('tbody td').length).toBe(expectedCells);
        expect(
          el.querySelectorAll('tbody td[rowspan], tbody td[colspan]').length
        ).toBe(merges.length);
        // Angular signale notamment ici les clés @for en double
        expect(warn).not.toHaveBeenCalled();
        warn.mockRestore();
      }
    );
  });

  it('affiche les valeurs en mode consultation et des champs en mode quiz', () => {
    const consult = render(sampleTable, false);
    expect(consult.querySelector('tbody')!.textContent).toContain('60 (U/T)');
    expect(consult.querySelectorAll('tbody input').length).toBe(0);

    const quiz = render(sampleTable, true);
    // 2 champs texte en colonne A (la 3e est « disabled »), 2 en colonne B (fusion)
    expect(quiz.querySelectorAll('tbody input[type="text"]').length).toBe(4);
    expect(quiz.querySelectorAll('tbody select').length).toBe(3);
  });
});
