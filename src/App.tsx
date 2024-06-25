import { useEffect, useState } from "react";
import "./App.css";
import { Cell} from "./types/type";
import Row from "./components/Row";
import HeadRow from "./components/HeadRow";



/// В этой ветке я создаю таблицу с помощью данных. 1 функция возвращает ряд с количеством колонок, 2 формирует таблицу с помощью рядов

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRow = async function(itemColumn:number, rowsCount:number){
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(row);
    },1500)
    const row = [...Array(rowsCount)].map((_, itemRow) => {
      if (itemColumn === 0 && itemRow === 0) {
        return {
          name: null,
          isGreen: null,
        };
      } else if (itemRow === 0) {
        return {
          name: `Заказ`,
          isGreen: null,
        };
      } else if (itemColumn === 0) {
        return {
          name: `Обработка ${itemRow}`,
          isGreen: null,
        };
      } else {
        return {
          name: null,
          isGreen: Math.random() > 0.5,
        };
      }
    });
  })
  return promise as Promise<Cell[]>;
}
const getTable = async function(columnCount:number, rowsCount:number) {
  const promise = await Promise.all([...Array(columnCount)].map(async (_, itemColumn) => {
    return await getRow(itemColumn, rowsCount )
  }))
  return promise
}

function App() {
  const [table, setTable] = useState <Cell[][]>([[]]);
  useEffect(() => {
    (async function () {
      setTable(await getTable(getRandomInt(2, 100), getRandomInt(2, 100)))
    })();
  }, []);

  const isLoading = table.length === 1;

  return (
    <>
    {isLoading && <div className="loader">Идет загрузка...</div>}
      {!isLoading && ( 
        <table>
          <thead>
            <tr>
              <HeadRow arrFirstRow = {table[0]}/>
            </tr>
          </thead>
          <tbody>
            {table.slice(1).map((row, lineNumber)=>{
              return(
                <Row table={row} lineNumber={lineNumber} key={`row${lineNumber}`}/>
              )
            })}
          
          </tbody>
        </table>
      )} 
    </>
  );
}

export default App;
