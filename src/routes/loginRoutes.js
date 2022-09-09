const express = require("express"),
  router = express.Router(),
  loginController = require("../controller/loginController");

const app = express();

router.put(
  "/api/saveImage",
  // // userMiddleWare.isRestPaswordTokenValid,
  // signup.isRestPaswordTokenValid,
  // activeteUser
  loginController.saveImage
);

module.exports = router;
