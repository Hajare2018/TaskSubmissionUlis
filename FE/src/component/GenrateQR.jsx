import React, { useState } from "react";
import QRCode from "qrcode.react";
// import copy from "react-copy-to-clipboard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const qrCodeText = `https://www.google.com/search?q=${text}`;
    setQRCodeValue(qrCodeText);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="container m-5 p-5">
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h2 style={{ margin: "1rem" }}>Generate QR</h2>
                </Card.Title>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Label>
                      <Form.Control
                        type="text"
                        value={text}
                        onChange={handleChange}
                      />
                    </Form.Label>
                    <Button type="submit">Submit</Button>
                  </Form>
                  {qrCodeValue && (
                    <div className="container">
                      <QRCode value={qrCodeValue} style={{ margin: "1rem" }}/>
                      <Button onClick={handleCopy} style={{ margin: "1rem" }}>
                        {copied ? "Copied!" : "Copy Link"}
                      </Button>
                    </div>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QRCodeGenerator;
