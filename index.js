const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('dev'));
app.use(cors());

require('./routes/timestamp.routes')(router);
require('./routes/whoami.routes')(router);

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
