exports.whoami = (req, res) => {
  res.status(200).send({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
};
