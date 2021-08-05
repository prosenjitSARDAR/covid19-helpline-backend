const CronService = require('../services/cronService');

class CronController {
    constructor() {
        this.cronService = new CronService();
    }

    getCovidData() {
        return new Promise((resolve, reject) => {
            this.cronService.getCovidData().then(covidData => {
                this.cronService.updateCovidData(covidData).then(result => {
                    return resolve(result);
                })

            }).catch(err => {
                return reject(err)
            })
        })
    }

}

module.exports = new CronController();