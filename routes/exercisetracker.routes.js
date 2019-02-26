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
      let exists;
      // Check pagination parameters
      if (req.query.from && req.query.to && req.query.limit) {
        res.status(400).send({ Error: 'Invalid Pagination' });
      } else if (req.query.from && req.query.to) {
        // Get user's exercise's between <from> and <to>
        exists = await Exercise.find({})
          .populate('user')
          .find({ user: userExists })
          .skip(parseInt(req.query.from))
          .limit(parseInt(req.query.to) - parseInt(req.query.from));
        res.status(200).send(exists);
      } else if (req.query.from && req.query.limit) {
        // Get <limit> of user's exercise's starting at <from>
        exists = await Exercise.find({})
          .populate('user')
          .find({ user: userExists })
          .skip(parseInt(req.query.from))
          .limit(parseInt(req.query.limit));
        res.status(200).send(exists);
      } else {
        res.status(400).send({ Error: 'Unknown Error' });
      }
    } else {
      return res.status(404).send({ Error: 'User does not exist' });
    }
  });
};
