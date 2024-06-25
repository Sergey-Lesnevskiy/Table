export interface IRow {
  name: string;
  arr: ICondition[];
}
interface ICondition {
  isTrue: boolean;
}
export interface Columns {
  arrColumns: string[]
}
export interface Rows {
  arrRows: IRow[];
}



