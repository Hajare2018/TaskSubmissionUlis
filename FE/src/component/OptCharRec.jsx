import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function OptCharRec() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const submitData = () => {
    setLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        console.log(m);
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setLoading(false);
      });
  };
  return (
    <div className="container">
      {!loading && <h4>Image To Text</h4>}
      {loading && (
        <>
          <ProgressBar
            className="form-control"
            value={progress}
            max="100"
            animated
            now={progress}
          />

          <p>Converting:- {progress} %</p>
        </>
      )}

      {!loading && !text && (
        <>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              type="file"
              style={{ width: "40vw" }}
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitData}>
            Submit
          </Button>
        </>
      )}

      {!loading && text && (
        <>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              rows="30"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Leave a comment here"
              style={{ height: "80vh" }}
            />
          </FloatingLabel>
        </>
      )}
    </div>
  );
}

export default OptCharRec;
