import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function SidebarMenu() {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "#0b3109fa",
        display: "block",
        height: "650px",
        width: "250px",
        marginLeft: "0px",
      }}
    >
      <Link
        style={{
          color: "white",
          marginLeft: "0px",
          marginTop: "35px",
          fontSize: "20px",
        }}
        to="/genrate-qr"
      >
        Genrate QR Link
      </Link>

      <Link
        style={{
          display: "block",
          color: "white",
          marginLeft: "0px",
          marginTop: "35px",
          fontSize: "20px",
        }}
        to="/genrate-qr-data"
      >
        Genrate QR Data
      </Link>

      <Link
        style={{
          display: "block",
          color: "white",
          marginLeft: "0px",
          marginTop: "35px",
          fontSize: "20px",
        }}
        to="/ocr"
      >
        Genrate OCR
      </Link>

      <Link
        style={{
          display: "block",
          color: "white",
          marginLeft: "0px",
          marginTop: "35px",
          fontSize: "20px",
        }}
        to="/print-star"
      >
        Print Star
      </Link>

      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{
            backgroundColor: "#0b3109fa",
            border: "1px solid #0b3109fa ",
            fontSize: "20px",
            marginLeft: "20px",
            display: "block",
          }}
        >
          Language File
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              style={{
                display: "block",
                color: "#0b3109fa",
                fontSize: "20px",
              }}
              to="/eng"
            >
              English Language Data
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              style={{
                display: "block",
                color: "#0b3109fa",
                fontSize: "20px",
              }}
              to="/hindi"
            >
              Hindi Language Data
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{
            backgroundColor: "#0b3109fa",
            border: "1px solid #0b3109fa ",
            fontSize: "20px",
            marginLeft: "20px",
            display: "block",
          }}
        >
          File Upload
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              style={{
                display: "block",
                color: "#0b3109fa",
                fontSize: "20px",
              }}
              to="/upload-img"
            >
              Upload Image
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              style={{
                display: "block",
                color: "#0b3109fa",
                fontSize: "20px",
              }}
              to="/show-img"
            >
              Show Image
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SidebarMenu;
