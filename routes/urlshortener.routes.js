const controller = require("../controllers/urlshortener.controller");

module.exports = router => {
  router.post("/url", controller.post);
  router.get("/url/:code", controller.get);
};
