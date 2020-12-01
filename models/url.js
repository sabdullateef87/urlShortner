const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
