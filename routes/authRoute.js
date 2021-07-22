const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');


//REGISTRATION          POST    http://localhost:3000/api/auth/registration
router.post('/registration', authController.registration.bind(authController));

//LOGIN         POST    http://localhost:3000/api/auth/login
router.post('/login', authController.login.bind(authController));

//CHANGE-PASSWORD         POST    http://localhost:3000/api/auth/change-password
router.post('/change-password', authenticate, authController.changePassword.bind(authController));

module.exports = router;