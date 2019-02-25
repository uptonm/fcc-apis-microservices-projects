const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Establish DB Connection
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  },
  (err, db) => {
    if (err) console.log({ Error: err });
    console.log('Connected to DB');
  }
);

require('./models/url.model');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

require('./routes/urlshortener.routes')(router);
require('./routes/timestamp.routes')(router);
require('./routes/whoami.routes')(router);

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
