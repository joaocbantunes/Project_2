const axios = require("axios");
const router = require("express").Router();
/* 
router.get("/artist-search", (req, res, next) => {
  discogsAPI
    .searchArtists(req.query.name)
    .then((data) => {
      const findArtists = data.body.artists.items;
      console.log(findArtists);
      res.render("artist-search", { findArtists });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
}); */

router.get("/artist-search", (req, res, next) => {
  res.render("artist-search");
});
/* .catch((err) =>
    console.log("The error while searching artists occurred: ", err)
  );
 */



axios
  .get(
    "https://api.discogs.com/database/search?artistsq=&key=process.env.key&secret=process.env.secret"
  )
  .then((response) => {
    const data = response.results;
    console.log(data);
    //res.render("hh", {data})
  })
  .catch((err) => next(err));

  module.exports = router;
