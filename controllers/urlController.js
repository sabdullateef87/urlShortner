const validUrl = require("valid-url");

const shortid = require("shortid");
const Url = require("../models/url");

const urlController = async (req, res) => {
  const { longUrl } = req.body;

  const baseUrl = process.env.PROD_URL || process.env.DEV_URL;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(404).json({
      message: "Base Url Not Valid",
    });
  }

  const urlCode = shortid.generate();
  const shortUrl = baseUrl + "/" + urlCode;
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        return res.json({
          status: "Succes",
          data: url,
        });
      } else {
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        res.json({
          status: "Succes",
          data: url,
        });
      }
    } catch (err) {
      res.status(404).json({
        status: "Failed",
        message: err.message,
      });
    }
  } else {
    res.status(404).json("INVALID URL");
  }
};

module.exports = urlController;
