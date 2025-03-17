import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Table, TablesConfig } from '../models/table.models';

@Component({
  selector: 'app-table-checker',
  templateUrl: './table-checker.component.html',
  styleUrls: ['./table-checker.component.scss'],
})
export class TableCheckerComponent {
  tables: TablesConfig = environment.tables;
  selectedTable: Table | undefined;
  answers: string[][] = [];
  correctAnswers: string[][] = [];
  results: string[][] = [];
  showingAnswers: boolean = false; // Pour afficher ou masquer les réponses
  mergedCells: any[] = [];
  nbRows: number = 0;
  nbCols: number = 0;

  constructor() {}

  // Sélectionner un tableau
  selectTable(tableKey: string): void {
    this.selectedTable = this.tables[tableKey];
    this.answers = this.selectedTable.data.map(
      (row) => row.map((cell) => '') // Initialiser avec des valeurs vides
    );
    this.correctAnswers = this.selectedTable.data;
    this.mergedCells = this.selectedTable.mergedCells || [];
    this.nbRows = this.selectedTable.data.length;
    this.nbCols = this.selectedTable.data[0].length;

    // Réinitialiser les réponses et le formulaire
    this.reset();
  }

  // Vérifier si la cellule est fusionnée
  isCellMerged(rowIndex: number, colIndex: number): boolean {
    return this.mergedCells.some(
      (mergedCell) =>
        mergedCell.rowIndex === rowIndex && mergedCell.colIndex === colIndex
    );
  }

  // Méthode pour obtenir la cellule fusionnée (si elle existe)
  getMergedCell(
    rowIndex: number,
    colIndex: number
  ): { rowspan: number; colspan: number } | null {
    // Cherche une cellule fusionnée qui commence à (rowIndex, colIndex)
    for (const mergedCell of this.mergedCells) {
      // Si la cellule fusionnée commence à (rowIndex, colIndex), retourne sa configuration
      if (
        rowIndex >= mergedCell.rowIndex &&
        rowIndex < mergedCell.rowIndex + mergedCell.rowspan &&
        colIndex >= mergedCell.colIndex &&
        colIndex < mergedCell.colIndex + mergedCell.colspan
      ) {
        // Retourne la configuration de rowspan et colspan
        return {
          rowspan: mergedCell.rowspan,
          colspan: mergedCell.colspan,
        };
      }
    }
    return null;
  }

  // Fonction pour vérifier si une cellule est la première dans une fusion
  isFirstMergedCell(rowIndex: number, colIndex: number): boolean {
    const mergedCell = this.selectedTable?.mergedCells?.find(
      (cell) => cell.rowIndex === rowIndex && cell.colIndex === colIndex
    );

    // Si mergedCell existe, et si la cellule est la première de la fusion
    return mergedCell
      ? mergedCell.rowIndex === rowIndex && mergedCell.colIndex === colIndex
      : false;
  }

  hideMergedCell(rowIndex: number, colIndex: number): boolean {
    for (const mergedCell of this.mergedCells) {
      if (
        rowIndex >= mergedCell.rowIndex &&
        rowIndex < mergedCell.rowIndex + mergedCell.rowspan &&
        colIndex >= mergedCell.colIndex &&
        colIndex < mergedCell.colIndex + mergedCell.colspan
      ) {
        return true;
      }
    }
    return false;
  }

  // Vérifier les réponses et stocker les résultats
  checkAnswers() {
    this.results = this.answers.map((row, i) =>
      row.map((cell, j) => {
        const trimmedCell = cell.toLowerCase().replace(/\s+/g, '');
        const trimmedCorrectAnswer = this.correctAnswers[i][j]
          .toLowerCase()
          .replace(/\s+/g, '');
        return trimmedCell === trimmedCorrectAnswer ||
          this.correctAnswers[i][j] === 'disabled'
          ? 'correct'
          : 'incorrect';
      })
    );
  }

  // Réinitialiser les données
  reset() {
    this.results = this.correctAnswers.map((row) => row.map(() => ''));
    this.answers = this.correctAnswers.map((row) => row.map(() => ''));
    this.showingAnswers = false;
  }

  // Afficher ou masquer les réponses
  showAnswers() {
    this.showingAnswers = !this.showingAnswers; // Inverser la visibilité des réponses
  }
}
