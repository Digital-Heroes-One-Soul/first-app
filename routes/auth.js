const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// for register a new seller.
router.post('/register',AuthController.register);

// for login exists seller.
router.post('/login',AuthController.login);

// for get all sellers to display them for buyer.
router.get('/sellers',AuthController.allSeller);

module.exports = router