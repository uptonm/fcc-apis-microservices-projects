exports.getTimestamp = (req, res) => {
  let d;
  if (!req.params.date_string || req.params.date_string.length === 0) {
    d = new Date();
  } else {
    d = new Date(req.params.date_string);
  }
  if (d.toUTCString() === 'Invalid Date') {
    return res.status(400).send({
      error: 'Invalid Date'
    });
  }
  return res.status(200).send({
    unix: d.getTime(),
    utc: d.toUTCString()
  });
};
