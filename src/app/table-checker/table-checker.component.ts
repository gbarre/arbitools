import { Component, Input, OnChanges } from '@angular/core';
import { Table } from '../models/table.models';

@Component({
  selector: 'app-table-checker',
  templateUrl: './table-checker.component.html',
  styleUrls: ['./table-checker.component.scss'],
})
export class TableCheckerComponent implements OnChanges {
  @Input() selectedTable: Table = {} as Table;
  @Input() quizzMode: boolean = true;
  answers: string[][] = [];
  correctAnswers: any[][] = [];
  results: any[][] = [];

  mergedCells: any[] = [];
  nbRows: number = 0;
  nbCols: number = 0;

  // Select a table
  ngOnChanges(): void {
    this.answers = this.selectedTable.data.map((row) =>
      row.map((cell) => (this.isObject(cell) ? cell.correct : ''))
    );
    this.correctAnswers = this.selectedTable.data;
    this.mergedCells = this.selectedTable.mergedCells || [];
    this.nbRows = this.selectedTable.data.length;
    this.nbCols = this.selectedTable.data[0].length;

    // Reset answers and results
    this.reset();
  }

  // Check if the cell contains an object
  isObject(cell: any): boolean {
    return typeof cell === 'object';
  }

  // Check if the cell is merged
  isCellMerged(rowIndex: number, colIndex: number): boolean {
    return this.mergedCells.some(
      (mergedCell) =>
        mergedCell.rowIndex === rowIndex && mergedCell.colIndex === colIndex
    );
  }

  // Method to get the merged cell (if it exists)
  getMergedCell(
    rowIndex: number,
    colIndex: number
  ): { rowspan: number; colspan: number } | null {
    // Search for a merged cell starting at (rowIndex, colIndex)
    for (const mergedCell of this.mergedCells) {
      // If the merged cell starts at (rowIndex, colIndex),
      // return its configuration
      if (
        rowIndex >= mergedCell.rowIndex &&
        rowIndex < mergedCell.rowIndex + mergedCell.rowspan &&
        colIndex >= mergedCell.colIndex &&
        colIndex < mergedCell.colIndex + mergedCell.colspan
      ) {
        // Return the rowspan and colspan configuration
        return {
          rowspan: mergedCell.rowspan,
          colspan: mergedCell.colspan,
        };
      }
    }
    return null;
  }

  // Function to check if a cell is the first in a merge
  isFirstMergedCell(rowIndex: number, colIndex: number): boolean {
    const mergedCell = this.selectedTable?.mergedCells?.find(
      (cell) => cell.rowIndex === rowIndex && cell.colIndex === colIndex
    );

    // If mergedCell exists, and if the cell is the first in the merge
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

  // Check answers and store results
  checkAnswers() {
    this.results = this.answers.map((row, i) =>
      row.map((cell, j) => {
        const correctCell = this.correctAnswers[i][j];
        if (typeof correctCell === 'string') {
          const trimmedCell = cell.toLowerCase().replace(/\s+/g, '');
          const trimmedCorrectAnswer = this.correctAnswers[i][j]
            .toLowerCase()
            .replace(/\s+/g, '');
          return trimmedCell === trimmedCorrectAnswer ||
            this.correctAnswers[i][j] === 'disabled'
            ? 'correct'
            : 'incorrect';
        } else {
          return cell === correctCell.correct ? 'correct' : 'incorrect';
        }
      })
    );
  }

  // Reset data
  reset() {
    this.results = this.correctAnswers.map((row) => row.map(() => ''));
    this.answers = this.correctAnswers.map((row) => row.map((cell) => ''));
  }
}
