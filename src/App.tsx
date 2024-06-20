// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";

interface IRoy {
  name: string;
  arr: ICondition[];
}
interface ICondition {
  condition: boolean;
}

function App() {

  const [roy, setRoy] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRoy(Math.floor(Math.random() * 99) + 2);
      setColumn(Math.floor(Math.random() * 99) + 2);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  const arrColumn = function () {
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
  const arrRoy = function () {
    const arrR: Array<IRoy> = [];
    for (let i = 0; i < roy; i++) {
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
          {arrColumn().map((it, i) => {
            return (
              <th scope={String(i)} key={it} className="column">
                {it}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {arrRoy().map((it, i) => {
          return (
            <tr key={`row${it.name}`}>
              <th scope={String(i)} key={`th${it.name}${i}`} className="row">
                {it.name}
              </th>
              {it.arr.map((item,i) => {
                return <td className={item.condition ? "green" : "red"} key={`td${it.name}${i}`}></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
