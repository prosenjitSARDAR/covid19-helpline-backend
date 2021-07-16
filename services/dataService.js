const baseService = require('./baseService');
const covid_data = require('../models/CovidData');

class authService extends baseService {

    constructor() {
        super();
    }

    async getCovidData() {
        try {
            let data = await covid_data.find({}).exec()
            return data;

        } catch (err) {
            console.log(err);
        }
    }

}


module.exports = authService;