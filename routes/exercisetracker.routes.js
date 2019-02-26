const mongoose = require('mongoose');
const User = mongoose.model('users');
const Exercise = mongoose.model('exercises');

module.exports = router => {
  router.get('/exercise/users', async (req, res) => {
    const exists = await User.find({});
    res.status(200).send(exists);
  });
  router.post('/exercise/users', async (req, res) => {
    // Check if username is valid
    console.log(req.body);
    if (!req.body.username || req.body.username.length < 1) {
      return res.status(400).send({ Error: 'Username parameter is required' });
    }
    // Check if user exists
    const exists = await User.findOne({ username: req.body.username });
    if (exists) {
      return res.status(400).send({ Error: 'User already exists' });
    }
    // Create new user or throw error
    const user = await new User({ username: req.body.username }).save();
    return res.status(200).send(user);
  });

  router.post('/exercise', async (req, res) => {
    // Check for required fields
    const exists = await User.findById(req.body.user);
    if (!exists) {
      return res.status(404).send({ Error: 'User not found' });
    }
    // Check for description field
    if (req.body.description.length < 1) {
      return res.status(400).send({ Error: 'Description is required' });
    }
    // Check for duration field
    if (!req.body.duration) {
      return res.status(400).send({ Error: 'Duration is required' });
    }
    let d;
    if (req.body.date) {
      d = new Date(req.body.date);
      if (isNaN(d.getTime())) {
        return res.status(400).send({ Error: 'Date is invalid' });
      } else {
        d = Date.now();
      }
    }
    // Post new exercise
    let exercise = await new Exercise({
      user: exists.id,
      description: req.body.description,
      duration: req.body.duration,
      date: d
    }).save();
    return res.status(200).send(exercise);
  });

  // GET /api/exercise/log?{userId}[&from][&to][&limit]
  router.get('/exercise/log', async (req, res) => {
    // Verify User parameter is supplied
    if (!req.query.userId) {
      return res.status(400).send({ Error: 'UserId query parameter is required.' });
    }
    // Verify user exists
    const userExists = await User.findById(req.query.userId);
    if (userExists) {
      let exists = await Exercise.find({})
        .populate('user')
        .find({ user: userExists });
      let dateRegx = new RegExp(/\d{4}-\d{2}-\d{2}/);
      if (req.query.to && req.query.to.match(dateRegx)) {
        exists = exists.filter(exercise => {});
      } else {
        res.send('This aint it cheif');
      }
    } else {
      return res.status(404).send({ Error: 'User does not exist' });
    }
  });
};

isDateAfter = (from, check) => {
  // YYYY-MM-DD

  var d1 = from.split('-'); // [YYYY, MM, DD]
  var c = check.split('-');

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

  return check >= from;
};

isDateBefore = (to, check) => {
  var d2 = to.split('-');
  var c = check.split('-');

  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

  return check <= to;
};
