const validUrl = require('valid-url');
const mongoose = require('mongoose');
const shortid = require('short-id');
const url = mongoose.model('urls');

module.exports = router => {
  router.post('/url', async (req, res) => {
    // Check body
    if (!req.body.url || req.body.url.length <= 1) {
      return res.status(400).send({ Error: "Missing required parameter 'url'" });
    }

    // Check if url is valid
    if (!validUrl.isUri(req.body.url)) {
      return res.status(400).send({ Error: 'Url is invalid' });
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
  });

  router.get('/url/:code', async (req, res) => {
    const exists = await url.findOne({ code: req.params.code });
    if (exists) {
      res.redirect(exists.url);
    } else {
      res.status(404).send({ Error: 'Url not found' });
    }
  });
};
