import { useEffect, useState } from 'react';
import * as d3 from 'd3';

const Fetch = () => {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
    const [fileSize, setFileSize] = useState("");
  useEffect(() => {
    d3.csv('https://gist.githubusercontent.com/thecrazydiamond1/2d33893822a6bda7c63e48563210a9ea/raw/cssNamedColors.csv')
        .then((data) => {
            const csvString = d3.csvFormat(data);
            setRows(data.length);
            setColumns(data.columns.length);
            setFileSize(Math.round(csvString.length / 1024));
        })
        .catch((error) => {
            console.error('Error fetching or parsing CSV data:', error);
        });
    
    // We would had done the same thing using async await and fetch by the following way.

    // async function fetchData() {
    //   const response = await fetch('https://gist.githubusercontent.com/thecrazydiamond1/2d33893822a6bda7c63e48563210a9ea/raw/cssNamedColors.csv');
    //   const text = await response.text();
    //   const parsedData = d3.csvParse(text);
    //   console.log(parsedData.length + "rows\n");
    //   console.log(parsedData.columns.length + "columns\n");
    //   console.log(Math.round(text.length/ 1024) + "KB\n");
    //   setRows(parsedData.length);
    //   setColumns(parsedData.columns.length);
    //   setFileSize(Math.round(text.length/ 1024));
    // }
    // fetchData();
  }, []);

  return (
    <div>
      <h1>Check console for fetched and parsed CSV data</h1>
        <p>Rows: {rows}</p>
        <p>Columns: {columns}</p>
        <p>File Size: {fileSize} KB</p>
      {/* You can use `data` here if you want */}
    </div>
  );
};

export default Fetch;
