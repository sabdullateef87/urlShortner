const express = require("express");
const router = express.Router();
const Url = require("../models/url");
const indexUrlCont = require("../controllers/indexUrlCont");

// router.get("/:code", indexUrlCont);

router.get("/:code", async (req, res) => {
  console.log("poopipopipipoip");
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json("No Url Found");
    }
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
