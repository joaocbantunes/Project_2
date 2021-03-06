const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const albumSchema = new Schema({
  artist: String,
  title: String,
  genre: String,
  year: Number,
  image: String,
  apiId: String,
});

const Album = model("Album", albumSchema);

module.exports = Album;
