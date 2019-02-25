const controller = require('../controllers/whoami.controller');
module.exports = router => {
  router.get('/whoami', controller.whoami);
};
