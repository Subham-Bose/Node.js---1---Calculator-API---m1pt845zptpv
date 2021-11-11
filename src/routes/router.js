const express = require("express");
const router = express.Router();
const {
  homePage,
  addtion,
  substraction,
  multiplication,
  division,
} = require("../controller/controller");

router.route("/").get(homePage);
router.route("/add").post(addtion);
router.route("/sub").post(substraction);
router.route("/multiply").post(multiplication);
router.route("/divide").post(division);

module.exports = router;
