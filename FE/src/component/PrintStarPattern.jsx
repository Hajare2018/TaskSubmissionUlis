import React, { useState } from "react";

function PrintStarPattern() {
  const [numRows, setNumRows] = useState(0);

  const change = (event) => {
    setNumRows(event.target.value);
  };

  const starPattern = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const stars = "*".repeat(i * 2 + 1);
      rows.push(<p key={i}>{" ".repeat(numRows - i - 1) + stars}</p>);
    }
    return rows;
  };
  return (
    <div className="container" style={{backgroundColor:"rgb(255, 204, 204)",height:"100vh"}}>
      <label htmlFor="numRows">Enter the number of rows: </label>
      <input type="number" id="numRows" value={numRows} onChange={change} />
      {starPattern()}
    </div>
  );
}

export default PrintStarPattern;