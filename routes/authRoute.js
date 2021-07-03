const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const Authenticate = require('../middlewares/authenticate');


//REGISTRATION          POST    http://localhost:3000/api/auth/registration
router.post('/registration', authController.registration.bind(authController));

//LOGIN         POST    http://localhost:3000/api/auth/login
router.post('/login', authController.login.bind(authController));

module.exports = router;