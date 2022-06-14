const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const CFM_27 = require("./CFM_27/CFM_27.json");

app.use(cors());
app.get("/", (req, res) => {
  res.json(CFM_27);
});
app.listen(process.env.PORT || 3000);
