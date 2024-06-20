export interface Column {
  arrColumn: string[]
}
function MyColumn(props: Column) {
  return(<>
  {props.arrColumn.map((it, i) => {
    return (
      <th scope={String(i)} key={it} className="column">
        {it}
      </th>
    );
  })}
  </>)
}
export default  MyColumn;