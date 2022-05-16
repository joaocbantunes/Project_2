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
  //console.log(req.query.name);
  const { name } = req.query;
  axios
    .get(
      `https://api.discogs.com/database/search?q=${name}&key=${process.env.CLIENT_KEY}&secret=${process.env.CLIENT_SECRET}`
    )
    .then((response) => {
      response.data.results.forEach((element) => {
        console.log(element.title);
      });
      res.render("artist-search", { artistList: response.data.results });
    })
    .catch((err) => next(err));
});
/* .catch((err) =>
    console.log("The error while searching artists occurred: ", err)
  ); */

/* axios
  .get(
    "https://api.discogs.com/database/search?artistsq=&key=process.env.key&secret=process.env.secret"
  )
  .then((response) => {
    const data = response.results;
    console.log(data);
    //res.render("hh", {data})
  })
  .catch((err) => next(err)); */

router.get("/album/:name", (req, res, next) => {
  const { name } = req.params;
  axios
    .get(
      `https://api.discogs.com/database/search?artist=${name}&format=vinyl&key=${process.env.CLIENT_KEY}&secret=${process.env.CLIENT_SECRET}`
    )
    .then((response) => {
      response.data.results.forEach((element) => {
        console.log(element.title);
      });
      res.render("album", { artistList: response.data.results });
    });
});

router.get("album-details/:name", (req, res, next) => {
  const { name } = req.params;
  axios
    .get(
      `https://api.discogs.com/database/search?artist=${name}&format=vinyl&key=${process.env.CLIENT_KEY}&secret=${process.env.CLIENT_SECRET}`
    )
    .then((response) => {
      response.data.results.forEach((element) => {
        console.log(element.title);
      });
      res.render("album-details", { artistList: response.data.results });
    });
});

module.exports = router;
