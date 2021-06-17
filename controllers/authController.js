const baseController = require('./baseController');
const authService = require('../services/authService');

class AuthController extends baseController {

    constructor() {
        super();
        this.authService = new authService();
    }

    //REGISTRATION
    registration(req, res, next) {

    }

    //LOGIN
    login(req, res, next) {

    }

}

module.exports = new AuthController