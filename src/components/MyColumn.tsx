import { Column } from "../types/type";

function MyColumn({arrColumn}: Column) {
  return(<>
  {arrColumn.map((it, i) => {
    return (
      <th scope={String(i)} key={it} className="column">
        {it}
      </th>
    );
  })}
  </>)
}
export default  MyColumn;