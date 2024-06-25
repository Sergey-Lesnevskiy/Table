import { Rows } from "../types/type";


function MyRow({ arrRows }: Rows) {
  return (
    <>
      {arrRows.map((tr, i) => {
        return (
          <tr key={`row${tr.name}`}>
            <th scope={String(i)} key={`th${tr.name}${i}`} className="row">
              {tr.name}
            </th>
            {tr.arr.map((td, i) => {
              return (
                <td
                  className={td.isTrue ? "green" : "red"}
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
