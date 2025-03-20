import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisciplinesConfig } from '../models/discipline.model';
import { environment } from 'src/environments/environments';
import { Table, TablesConfig } from '../models/table.models';

@Component({
  selector: 'app-table-discipline',
  templateUrl: './table-discipline.component.html',
  styleUrls: ['./table-discipline.component.scss'],
})
export class TableDisciplineComponent implements OnInit {
  @Input() quizzMode: boolean = true;
  disciplines: DisciplinesConfig = environment.disciplines;
  disciplineKeys: string[] = Object.keys(this.disciplines);
  selectedDiscipline: string = '';
  tables: TablesConfig = {};
  selectedTable: Table = {} as Table;
  selectedTableKey: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const discipline = params['d'];
      const table = params['t'];
      if (discipline && this.disciplineKeys.includes(discipline)) {
        this.selectDiscipline({ value: discipline });
        if (table && this.tables[table]) {
          this.selectTable({ value: table });
        }
      }
    });
  }

  // Select a discipline
  selectDiscipline(selected: any): void {
    const disciplineKey = selected.value;
    this.selectedDiscipline = disciplineKey;
    this.tables = this.disciplines[disciplineKey].tables;
    this.selectedTable = {} as Table;
    this.selectedTableKey = '';
  }

  // Select a table
  selectTable(selected: any): void {
    this.selectedTableKey = selected.value;
    this.selectedTable = this.tables[this.selectedTableKey];
  }

  // Toggle quizz mode
  toggleMode() {
    this.quizzMode = !this.quizzMode;
  }
}
