const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  username: String
});

const user = mongoose.model('users', userModel);
module.exports = user;
