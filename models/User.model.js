const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: String,
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Disque_Vinyl.svg/1024px-Disque_Vinyl.svg.png",
    collection: [
      {
        type: Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
  },
});

const User = model("User", userSchema);

module.exports = User;
