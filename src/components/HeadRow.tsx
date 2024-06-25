import { Cell } from "../types/type";
export interface Row {
  arrFirstRow: Cell[];
}
function HeadRow({arrFirstRow}: Row) {
  return(<>

  {arrFirstRow.map((it, i) => {
    return (
      <th scope={String(i)} key={i} className="column">
        {it.name !==null?it.name:''}
      </th>
    );
  })}
  </>)
}
export default  HeadRow;
