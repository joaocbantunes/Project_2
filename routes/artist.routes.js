//const discogsWebAPI = require("https://api.discogs.com");
const router = require("express").Router();

router.get("/artist-search", (req, res, next) => {
  discogsAPI
    .searchArtists(req.query.name)
    .then((data) => {
      const findArtists = data.body.artists.items;
      console.log(findArtists);
      res.render("artist-search-results", { findArtists });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

module.exports = router;
