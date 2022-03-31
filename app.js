const express = require("express");
const app = express();
const multer = require("multer");
const { ipfsService } = require("./ipfsService");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .post("/ipfs/image", upload.single("image"), async (req, res) => {
    const image = req.file;
    try {
      const response = await ipfsService(image);
      res.send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .listen(5000, () => {
    console.log("http://localhost:5000");
  });
