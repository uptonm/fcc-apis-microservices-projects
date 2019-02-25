const mongoose = require('mongoose');

const urlModel = new mongoose.Schema({
  url: String,
  code: String,
  createdAt: String
});

const url = mongoose.model('urls', urlModel);
module.exports = url;
