const axios = require("axios");
const User = require("../models/User.model");
const router = require("express").Router();

const Album = require("../models/Album.model");

//const fileUploader = require("../config/cloudinary.config");

router.get("/user", (req, res, next) => {
  res.render("profile/user", { user: req.session.user });
});

/* router.get("/user/collection", (req, res, next) => {
  res.render("profile/collection");
}); */

router.get("/profile/wishlist", (req, res, next) => {
  res.render("profile/wishlist");
});

router.get("/profile/collection", (req, res, next) => {
  res.render("profile/collection");
});

/*
router.post("/user/wishlist", (req, res, next) => {
  const { name } = req.params;
  User.create({ wishlist })
    .then(() => res.redirect("profile/wishlist"))
    .catch(() => next(err));
});
 */
router.get("/user/wishlist", (req, res, next) => {
  const user = req.session.user;
  User.findById(user._id)
    .populate("wishlist")
    .then((user) => {
      res.render("profile/wishlist", { user });
    });
});

router.post("/user/wishlist/:id", (req, res, next) => {
  const { id } = req.params;
  axios
    .get(
      `https://api.discogs.com/releases/${id}?key=${process.env.CLIENT_KEY}&secret=${process.env.CLIENT_SECRET}`
    )
    .then((response) => {
      console.log(response.data);
      const album = response.data;
      Album.create({
        title: album.title,
        image: album.thumb,
        artist: album.artists_sort,
      })
        .then((Album) => {
          User.findByIdAndUpdate(req.session.user._id, {
            $push: { wishlist: Album.id },
          }).then(() => {
            console.log(response.data);
            res.redirect("/user/wishlist");
          });
        })
        .catch((err) => next(err));
    });
});

router.post("/user/wishlist/:id/delete", (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndUpdate(req.session.user._id, {
    $pull: { wishlist: id },
  })
    .then(() => {
      return Album.findByIdAndDelete(req.params.id);
    })
    .then(() => res.redirect("/user/wishlist"))
    .catch(() => next(err));
});

router.get("/user/collection", (req, res, next) => {
  const user = req.session.user;
  User.findById(user._id)
    .populate("collections")
    .then((user) => {
      res.render("profile/collection", { user });
    });
});

router.post("/user/collection/:id", (req, res, next) => {
  const { id } = req.params;
  axios
    .get(
      `https://api.discogs.com/releases/${id}?key=${process.env.CLIENT_KEY}&secret=${process.env.CLIENT_SECRET}`
    )
    .then((response) => {
      const album = response.data;
      Album.create({
        title: album.title,
        image: album.thumb,
        artist: album.artists_sort,
      })
        .then((Album) => {
          User.findByIdAndUpdate(req.session.user._id, {
            $push: { collections: Album.id },
          }).then(() => {
            console.log(response.data);
            res.redirect("/user/collection");
          });
        })
        .catch((err) => next(err));
    });

  router.post("/user/collection/:id/delete", (req, res, next) => {
    const { id } = req.params;
    User.findByIdAndUpdate(req.session.user._id, {
      $pull: { collections: id },
    })
      .then(() => {
        return Album.findByIdAndDelete(req.params.id);
      })
      .then(() => res.redirect("/user/collection"))
      .catch(() => next(err));
  });
});

module.exports = router;
