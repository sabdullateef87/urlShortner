const express = require("express"),
  app = express(),
  PORT = procees.env.PORT || 5000;
const connectDB = require("./config/db");

require("dotenv").config();
const bodyParser = require("body-parser");
const url = require("./routes/url");
const indexUrl = require("./routes/indexUrl");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect the database
connectDB();

app.use("/", indexUrl);
app.use("/api/url", url);

app.use(express.json({ extended: false }));
app.listen(PORT, () => console.log(`APP CONNECTED AT PORT -> ${PORT}`));
