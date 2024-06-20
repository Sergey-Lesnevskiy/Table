// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";

interface Iroy {
  name: string;
  arr: Icondition[];
}
interface Icondition {
  condition: boolean;
}

function App() {
  const handelLogin = (): number => {
    return Math.floor(Math.random() * 99) + 2;
  };
  const [roy, setRoy] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRoy(handelLogin());
      setColumn(handelLogin());
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
    const arrR: Array<Iroy> = [];
    for (let i = 0; i < roy; i++) {
      // if (i === 0) {
      //   arrR.push({ name: ``, condition: false});
      // } else {
      const row = [];
      for (let i = 0; i < column - 1; i++) {
        row.push({ condition: Math.random() > 0.5 });
      }
      arrR.push({ name: `Заказ ${i + 1}`, arr: [...row] });
      // }
    }
    return arrR;
  };

  return (
    <table>
      <thead>
        <tr>
          {arrColumn().map((it, i) => {
            return (
              <th scope={String(i)} key={it}>
                {it}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {arrRoy().map((it, i) => {
          return (
            <tr>
              <th scope={String(i)} key={it.name}>
                {it.name}
              </th>
              {it.arr.map((item) => {
                return <td className={item.condition ? "green" : "red"}></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
