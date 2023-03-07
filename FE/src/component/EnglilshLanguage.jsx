import React, { useState, useEffect } from "react";
import axios from "axios";

function EnglilshLanguage() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/eng-json-data")
      .then((response) => setJsonData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {jsonData &&
        jsonData.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.name}</li>
              <li>{item.dob}</li>
            </ul>
          );
        })}
    </div>
  );
}

export default EnglilshLanguage;
