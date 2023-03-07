import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function FileShow() {
  const [data, setData] = useState([]);
  const imageShow = async () => {
    const apiData = await axios.get("http://localhost:3233/api/image-get");
    setData(apiData.data.response);
  };

  useEffect(() => {
    imageShow();
  }, []);
  return (
    <div>
      <Table className="container w-75" striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    width={100}
                    height={100}
                    src={`http://localhost:3005/${item.image}`}
                    alt="logo"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default FileShow;
