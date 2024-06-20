import { useEffect, useState } from "react";
import "./App.css";
import { IRow } from "./types/type";
import MyColumn from "./components/MyColunm";

function App() {

  const [row, setRow] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRow(Math.floor(Math.random() * 99) + 2);
      setColumn(Math.floor(Math.random() * 99) + 2);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  const arrColumn = function (column:number):string[] {
    const arr = [];
    for (let i = 0; i < column; i++) {
      if (i === 0) {
        arr.push(``);
      } else {
        arr.push(`Обработка ${i}`);
      }
    }
    return arr;
  };

  const arrRow = function (row:number):IRow[] {
    const arrR: Array<IRow> = [];
    for (let i = 0; i < row; i++) {
      const row = [];
      for (let i = 0; i < column - 1; i++) {
        row.push({ condition: Math.random() > 0.5 });
      }
      arrR.push({ name: `Заказ ${i + 1}`, arr: [...row] });
    }
    return arrR;
  };

  return (
    <table>
      <thead>
        <tr>
          <MyColumn arrColumn={arrColumn(column)}/>
        </tr>
      </thead>
      <tbody>
        {arrRow(row).map((tr, i) => {
          return (
            <tr key={`row${tr.name}`}>
              <th scope={String(i)} key={`th${tr.name}${i}`} className="row">
                {tr.name}
              </th>
              {tr.arr.map((td,i) => {
                return <td className={td.condition ? "green" : "red"} key={`td${tr.name}${i}`}></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
