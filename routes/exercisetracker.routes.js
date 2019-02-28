const controller = require("../controllers/exercise.controller");

module.exports = router => {
  router.get("/exercise/users", controller.get);

  router.post("/exercise/users", controller.postUser);

  router.post("/exercise", controller.postExercise);

  router.get("/exercise/log", controller.log);
};
