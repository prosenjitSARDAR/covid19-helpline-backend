const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


//Covid-Data         GET    http://localhost:3000/api/data/covid-data
router.get('/covid-data', dataController.getCovidData.bind(dataController));

module.exports = router;