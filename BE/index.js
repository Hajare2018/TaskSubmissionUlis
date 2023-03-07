const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const { uploadimageRoutes } = require("./routes/uploadimageRoutes");
const { jsondataRoutes } = require("./routes/jsondataRoutes");

const port = 3005;

const app = express();
app.use(cors());
app.use(express.json());
// Middleware to parse request body as JSON
app.use(bodyParser.json());

app.use("/api", uploadimageRoutes);

/**----------json file data--------*/
app.use("/api", jsondataRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on http://localhost:${port}`);
  }
});
