import "./App.css";
import { Routes, Route } from "react-router-dom";
import SidebarMenu from "./component/SidebarMenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FileShow from "./component/FileShow";
import FileUpload from "./component/FileUpload";
import HindiLanguage from "./component/HindiLanguage";
import EnglilshLanguage from "./component/EnglilshLanguage";
import PrintStarPattern from "./component/PrintStarPattern";
import OptCharRec from "./component/OptCharRec";
import GenrateQR from "./component/GenrateQR";
import GenrateQrData from "./component/GenrateQrData";

function App() {
  return (
    <div className="App">
        <Row>
          <SidebarMenu />

          <Col>
            <Routes>
              <Route path="/genrate-qr" element={<GenrateQR />} />
              <Route path="/genrate-qr-data" element={<GenrateQrData />} />
              <Route path="/ocr" element={<OptCharRec />} />
              <Route path="/print-star" element={<PrintStarPattern />} />
              <Route path="/eng" element={<EnglilshLanguage />} />
              <Route path="/hindi" element={<HindiLanguage />} />
              <Route path="/upload-img" element={<FileUpload />} />
              <Route path="/show-img" element={<FileShow />} />
            </Routes>
          </Col>
        </Row>
    </div>
  );
}

export default App;
