var multer = require("multer");
var upload = multer({ dest: "uploads/" });

module.exports = router => {
  router.post("/file/upload", upload.single("file"), (req, res) => {
    res.status(200).send({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });
  });
};
