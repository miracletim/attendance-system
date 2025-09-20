const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  console.log(req.method + " " + req.url);
  res.json({ message: "Hello" });
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log("Running");
});
