const mongoose = require("mongoose");


// schema for Seller.
var UserSchema = new mongoose.Schema(
  {
    name :String,
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
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

// Model for Seller.
mongoose.model("User", UserSchema);
