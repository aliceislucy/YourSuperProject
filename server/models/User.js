const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  profileImg: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  address: String,
  stripeId: String,
  isAdmin: boolean,
  isMember: boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
