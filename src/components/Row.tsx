import { Props } from "../types/type";

function Row({ table, lineNumber }: Props) {
  return (
    <>
      <tr>
      <th scope={String()} key={`th${lineNumber+1}`}>
        {`${table[0]?.name}${lineNumber+1}`}
      </th>
      {table.slice(1).map((td, i) => {
        return (
          <td
            className={td.isGreen ? "green" : "red"}
            key={`td${i}`}
          ></td>
        );
      })}
    </tr>
  </>)
}

export default Row;