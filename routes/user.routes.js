const axios = require("axios");
const User = require("../models/User.model");
const router = require("express").Router();

router.get("/user", (req, res, next) => {
  res.render("profile/user");
});

router.get("/user/collection", (req, res, next) => {
  res.render("profile/collection");
});

router.get("/user/wishlist", (req, res, next) => {
  res.render("profile/wishlist");
});

module.exports = router;
