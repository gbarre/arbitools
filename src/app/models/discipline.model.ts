import { Table, TablesConfig } from './table.models';

export class Discipline {
  name: string;

  tables: TablesConfig = {};

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getTables(): TablesConfig {
    return this.tables;
  }

  setTables(tables: TablesConfig): void {
    this.tables = tables;
  }

  setTable(key: string, config: Table): void {
    this.tables[key] = config;
  }

  deleteTable(key: string): void {
    delete this.tables[key];
  }

  getTableKeys(): string[] {
    return Object.keys(this.tables);
  }

  clearTables(): void {
    this.tables = {};
  }
}

export interface DisciplinesConfig {
  [key: string]: Discipline;
}
