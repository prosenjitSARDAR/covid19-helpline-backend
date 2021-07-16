const createError = require('http-errors');
const baseController = require('./baseController');
const dataService = require('../services/dataService');

class dataController extends baseController {

    constructor() {
        super();
        this.dataService = new dataService();

    }

    //GET DAILY COVID DATA
    async getCovidData(req, res, next) {
        try {
            const covidData = await this.dataService.getCovidData()
            console.log(covidData);
            return res.status(200).send({ message: "Done! Get daily Covid-19 data successfully", success: true, data: { ...covidData } })

        } catch (err) {
            console.log(err);
            if (err.name === 'ValidationError') {
                next(createError(422, err.message));
                return;
            }
            next(err);
        }
    }

}

module.exports = new dataController;