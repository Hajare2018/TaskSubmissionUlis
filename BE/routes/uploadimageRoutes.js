const express = require("express");
const app = express();
const uploadimageRoutes = express.Router();
const path = require("path");
const multer = require("multer");

const {
  getImageData,
  postImageData,
} = require("../controller/uploadimageController");

app.use(express.static(path.join(__dirname + "/uploads")));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

uploadimageRoutes.get("/image-get", getImageData);
uploadimageRoutes.post("/image-post", upload.single("image"), postImageData);

module.exports = { uploadimageRoutes };
