export interface IRow {
  name: string;
  arr: ICondition[];
}

interface ICondition {
  isTrue: boolean;
}

export interface Columns {
  arrColumns: string[];
}

export interface Rows {
  arrRows: IRow[];
}

export interface Table {
  table: Cell[];
}

export interface Cell {
  name: string | null;
  isGreen: boolean | null;
}

export type Props = { table: Cell[]; lineNumber: number }