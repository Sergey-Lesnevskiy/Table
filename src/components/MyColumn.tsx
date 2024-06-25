import { Columns } from "../types/type";

function MyColumn({arrColumns}: Columns) {
  return(<>
  {arrColumns.map((it, i) => {
    return (
      <th scope={String(i)} key={it} className="column">
        {it}
      </th>
    );
  })}
  </>)
}
export default  MyColumn;