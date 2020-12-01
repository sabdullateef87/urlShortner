const express = require("express");
const router = express.Router();
const Url = require("../models/url");
const indexUrlCont = require("../controllers/indexUrlCont");

router.get("/:code", indexUrlCont);
module.exports = router;
