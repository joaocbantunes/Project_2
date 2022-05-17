const axios = require("axios");
const User = require("../models/User.model");
const router = require("express").Router();

const fileUploader = require("../config/cloudinary.config");

router.get("/user", (req, res, next) => {
  const user = req.session.user;
  res.render("profile/user", { user });
});

router.get("/user/collection", (req, res, next) => {
  res.render("profile/collection");
});

router.get("/user/wishlist", (req, res, next) => {
  res.render("profile/wishlist");
});

module.exports = router;
