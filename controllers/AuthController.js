const UserModel = require("../models/userModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hashPass = require("password-hash");


const register = (req, res, next) => {
  // function to register a new User.
  let pass = hashPass.generate(req.body.password);
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
  });
  let user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: pass,

    image: req.body.image,
    service: req.body.service,
    isSeller: req.body.isSeller,
  });
  user
    .save()
    .then((seller) => {
      res.json({
        message: "Seller Added Successfully!",
      });
    })
    .catch((err) => {
      res.json({
        messageError: err,
      });
    });
};

const login = (req, res, next) => {
  // function to login exists User.
  var email = req.body.email;
  var password = req.body.password;

  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (hashPass.verify(password, user.password)) {
          let token = jwt.sign(
            { name: user.name, isSeller: user.isSeller},
            "verySecretValue",
            {
              expiresIn: "1h",
            }
          );
          res.json({ message: "Login Successful!", token });
        } else {
          res.json("password does not match!");
        }
      } else {
        res.json({ message: "No user found" });
      }
    })
    .catch((err) => {
      res.json({ messageError: err });
    });
};

const allSeller = (req, res) => {
    // function get all Sellers.
    UserModel.find({isSeller:true})
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({ message: "An Error" });
    });
};

module.exports = { register, login, allSeller };


