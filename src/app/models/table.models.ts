export interface Table {
  name: string;
  description: any;
  hint?: string;
  headers: {
    firstCell: string;
    rows: string[];
    columns: string[];
  };
  data: string[][];
  mergedCells?: {
    rowIndex: number;
    colIndex: number;
    rowspan: number;
    colspan: number;
  }[];
}

export interface TablesConfig {
  [key: string]: Table;
}
