const mongoose = require("mongoose");
const User = mongoose.model("users");
const Exercise = mongoose.model("exercises");
const dateRegx = new RegExp(/\d{4}-\d{2}-\d{2}/);

/**
 * @param from Date
 * @param check Date
 */
isDateAfter = (check, from) => {
  // console.log(
  //   `${check.toString()} ${
  //     check >= from ? "is" : "is not"
  //   } after ${from.toString()}`
  // );
  return check >= from;
};

/**
 * @param to Date
 * @param check Date
 */
isDateBefore = (check, to) => {
  // console.log(
  //   `${check.toString()} ${
  //     check >= to ? "is" : "is not"
  //   } before ${to.toString()}`
  // );
  return check <= to;
};

exports.get = async (req, res) => {
  if (req.query.username) {
    const user = await User.findOne({ username: req.query.username });
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send({ Error: "User not found" });
    }
  } else {
    const exists = await User.find({});
    return res.status(200).send(exists);
  }
};

exports.postUser = async (req, res) => {
  // Check if username is valid
  console.log(req.body);
  if (!req.body.username || req.body.username.length < 1) {
    return res.status(400).send({ Error: "Username parameter is required" });
  }
  // Check if user exists
  const exists = await User.findOne({ username: req.body.username });
  if (exists) {
    return res.status(400).send({ Error: "User already exists" });
  }
  // Create new user or throw error
  const user = await new User({ username: req.body.username }).save();
  return res.status(200).send(user);
};

exports.postExercise = async (req, res) => {
  // Check for required fields
  const exists = await User.findOne({ username: req.body.user });
  if (!exists) {
    return res.status(404).send({ Error: "User not found" });
  }
  // Check for description field
  if (req.body.description.length < 1) {
    return res.status(400).send({ Error: "Description is required" });
  }
  // Check for duration field
  if (!req.body.duration) {
    return res.status(400).send({ Error: "Duration is required" });
  }

  let date = Date.now();
  if (req.body.date) {
    if (req.body.date.match(dateRegx)) {
      date = new Date(req.body.date);

      if (isNaN(date.getTime())) {
        return res.status(400).send({ Error: "Date is invalid" });
      }
    } else {
      res.status(400).send({ Error: "Date must be valid YYYY-MM-DD format" });
    }
  }
  // Post new exercise
  let exercise = await new Exercise({
    user: exists.id,
    description: req.body.description,
    duration: req.body.duration,
    date: date
  }).save();
  return res.status(200).send(exercise);
};

exports.log = async (req, res) => {
  console.log(req.query);
  // Verify User parameter is supplied
  if (!req.query.username) {
    return res
      .status(400)
      .send({ Error: "Username query parameter is required." });
  }
  // Verify user exists
  const userExists = await User.findOne({ username: req.query.username });
  if (userExists) {
    let exists = await Exercise.find({})
      .populate("user")
      .find({ user: userExists });
    // Perform aggregation for "to" parameter
    if (req.query.to && req.query.to.match(dateRegx)) {
      exists = exists.filter(exercise => {
        return isDateBefore(exercise.date, new Date(req.query.to));
      });
    } else if (req.query.to) {
      return res
        .status(400)
        .send({ Error: "Date must be valid YYYY-MM-DD format" });
    }

    // Perform aggregation for "from" parameter
    if (req.query.from && req.query.from.match(dateRegx)) {
      exists = exists.filter(exercise => {
        return isDateAfter(exercise.date, new Date(req.query.from));
      });
    } else if (req.query.from) {
      return res
        .status(400)
        .send({ Error: "Date must be valid YYYY-MM-DD format" });
    }

    // Perform aggregation for "limit" parameter
    if (req.query.limit) {
      if (isNaN(parseInt(req.query.limit))) {
        return res.status(400).send({ Error: "Limit must be a valid number" });
      } else if (exists.length <= parseInt(req.query.limit)) {
        exists = exists;
      } else {
        exists = exists.slice(0, req.query.limit);
      }
    }
    return res.status(200).send(exists);
  } else {
    return res.status(404).send({ Error: "User does not exist" });
  }
};
