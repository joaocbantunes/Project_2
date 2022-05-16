const axios = require("axios");
const User = require("../models/User.model");
const router = require("express").Router();

router.get("/user", (req, res) => {
  res.render("profile/user");
});

module.exports = router;
