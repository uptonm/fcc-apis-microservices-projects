const mongoose = require('mongoose');

const exerciseModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  description: String,
  duration: String,
  date: Date
});

const exercise = mongoose.model('exercises', exerciseModel);
module.exports = exercise;
