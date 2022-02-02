const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// for register a new seller.
router.post('/register',AuthController.register);

// for login exists seller.
router.post('/login',AuthController.login);

module.exports = router