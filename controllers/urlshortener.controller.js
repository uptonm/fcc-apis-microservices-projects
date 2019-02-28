const mongoose = require("mongoose");
const shortid = require("short-id");
const url = mongoose.model("urls");

exports.post = async (req, res) => {
  // Check body
  if (!req.body.url || req.body.url.length <= 1) {
    return res.status(400).send({ Error: "Missing required parameter 'url'" });
  }

  var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  if (!regex.test(req.body.url)) {
    return res.status(400).send({ Error: "Url invalid" });
  }

  // Check if url has already been used
  const exists = await url.findOne({ url: req.body.url });
  if (exists) {
    return res.status(200).send(exists);
  }

  // Produce shortened url or return existing one
  const urlSnip = shortid.generate();
  const newUrl = await new url({
    url: req.body.url,
    code: urlSnip,
    createdAt: Date.now()
  }).save();
  res.status(200).send(newUrl);
};

exports.get = async (req, res) => {
  const exists = await url.findOne({ code: req.params.code });
  if (exists) {
    res.redirect(exists.url);
  } else {
    res.status(404).send({ Error: "Url not found" });
  }
};
