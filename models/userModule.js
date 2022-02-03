const mongoose = require("mongoose");


// schema for User.
var UserSchema = new mongoose.Schema(
  {
    name :String,
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      index: true,
      unique: true
    },
    password: String,
    image: String,
    service: String,
    isSeller:Boolean
  },
  { timestamps: true }
);

// Model for User.
let UserModel = mongoose.model("seller", UserSchema);

module.exports = UserModel