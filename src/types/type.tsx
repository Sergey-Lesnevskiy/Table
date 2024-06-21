export interface IRow {
  name: string;
  arr: ICondition[];
}
interface ICondition {
  condition: boolean;
}
export interface Column {
  arrColumn: string[]
}