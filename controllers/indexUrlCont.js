const Url = require("../models/url");

const indexUrlCont = async (req, res) => {
  console.log(req.params);
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
};
module.exports = indexUrlCont;
