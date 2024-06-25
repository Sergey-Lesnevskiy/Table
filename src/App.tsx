import { useEffect, useState } from "react";
import "./App.css";
import { IRow } from "./types/type";
import MyColumn from "./components/MyColumn";
import MyRow from "./components/MyRows";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getColumns = async function (column: number): Promise<string[]> {
  const arrColumns = new Array(column);

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < column; i++) {
        if (i === 0) {
          arrColumns[i] = "";
        } else {
          arrColumns[i] = `Обработка ${i}`;
        }
      }
      resolve(arrColumns);
    }, 1500);
  });
  return promise as Promise<string[]>;
};

const getRows = async function (
  rowCount: number,
  columnCount: number
): Promise<IRow[]> {
  const arrRows: Array<IRow> = new Array(rowCount);
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < rowCount; i++) {
        const row = new Array(columnCount);
        for (let j = 0; j < columnCount - 1; j++) {
          const isTrue = Math.random() > 0.5;
          row[j] = { isTrue };
        }
        arrRows[i] = { name: `Заказ ${i + 1}`, arr: row };
      }
      resolve(arrRows);
    }, 1500);
  });

  return promise as Promise<IRow[]>;
};

function App() {
  const [rows, setRows] = useState<IRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    (async function () {
      const columnCount = getRandomInt(2, 100);
      setColumns(await getColumns(columnCount));
      const rowCount = getRandomInt(2, 100);
      setRows(await getRows(rowCount, columnCount));
    })();
  }, []);

  const isLoading = rows.length === 0 || columns.length === 0;

  return (
    <>
      {isLoading && <div className="loader">Идет загрузка...</div>}
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <MyColumn arrColumns={columns} />
            </tr>
          </thead>
          <tbody>
            <MyRow arrRows={rows} />
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;