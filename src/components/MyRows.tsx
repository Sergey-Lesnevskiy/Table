import { IRow } from "../types/type";

export interface Row {
  arrRow: IRow[];
}
function MyRow({arrRow}:Row) {
  return (
    <>
      {arrRow.map((tr, i) => {
        return (
          <tr key={`row${tr.name}`}>
            <th scope={String(i)} key={`th${tr.name}${i}`} className="row">
              {tr.name}
            </th>
            {tr.arr.map((td, i) => {
              return (
                <td
                  className={td.condition ? "green" : "red"}
                  key={`td${tr.name}${i}`}
                ></td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}

export default MyRow;
