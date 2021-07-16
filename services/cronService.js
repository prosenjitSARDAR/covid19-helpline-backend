const axios = require('axios');
const covid_data = require('../models/CovidData');

class CronService {
    constructor() {

    }

    getCovidData() {
        return new Promise((resolve, reject) => {
            axios.get('https://api.covid19api.com/total/dayone/country/india').then(response => {
                let lastCovidData = response['data'].length - 1;
                return resolve(response['data'][lastCovidData]);

            }).catch(error => {
                return reject(error);
            });

        });
    }

    updateCovidData(covidData) {
        return new Promise((resolve, reject) => {
            covid_data.find({}).then(data => {
                if (data.length > 0) {
                    covid_data.findByIdAndUpdate(data[0]['_id'], {
                        confirmed: covidData.Confirmed,
                        deaths: covidData.Deaths,
                        recovered: covidData.Recovered,
                        active: covidData.Active,
                        date: covidData.Date
                    }, { new: true }).exec()

                } else {
                    let COVID_DATA = new covid_data({
                        confirmed: covidData.Confirmed,
                        deaths: covidData.Deaths,
                        recovered: covidData.Recovered,
                        active: covidData.Active,
                        date: covidData.Date
                    })
                    COVID_DATA.save()
                }
                return resolve(covidData);

            }).catch(error => {
                return reject(error);
            });
        });
    }
}

module.exports = CronService;
