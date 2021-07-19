const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const authenticate = require('../middlewares/authenticate');


//Covid-Data         GET    http://localhost:3000/api/data/covid-data
router.get('/covid-data', dataController.getCovidData.bind(dataController));

//get-profile-Data         GET    http://localhost:3000/api/data/profile-details
router.get('/profile-details', authenticate, dataController.getProfileData.bind(dataController));

//update-profile-Data         PATCH    http://localhost:3000/api/data/profile-details
router.patch('/profile-details', authenticate, dataController.updateProfileData.bind(dataController));

module.exports = router;