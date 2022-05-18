const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */
router.get("/", isLoggedOut, (req, res, next) => {
  if (isLoggedOut) {
    res.render("index");
  } else {
    res.render("profile/user", { user: req.session.user });
  }
});

module.exports = router;
