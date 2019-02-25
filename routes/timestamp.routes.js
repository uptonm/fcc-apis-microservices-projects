const controller = require('../controllers/timestamp.controller');
module.exports = router => {
  router.get('/timestamp/:date_string?', controller.getTimestamp);
};
