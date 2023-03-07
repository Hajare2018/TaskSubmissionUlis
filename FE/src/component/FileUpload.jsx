import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function FileUpload() {
  const [image, setImage] = useState("");

  const imageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    const config = {
      "Content-Type": "multipart/form-data",
    };
    let apiData = await axios.post(
      " http://localhost:3005/api/image-post",
      formData,
      config
    );
    console.log(apiData, "response");
  };
  return (
    <div>
      <Form className="container" onSubmit={submitData}>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter image"
            onChange={imageUpload}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FileUpload;
