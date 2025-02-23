const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Username number must contain 3 letters."],
    maxLength: [30, "Phone number must less than 30 letters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // minLength: [8, "Password number must contain 6 letters."],
    // maxLength: [30, "Password number must less than 30 letters."],
  },
  bio: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "https://getdrawings.com/free-icon/woman-profile-icon-68.png",
  },
  phonenumber: {
    type: Number,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
