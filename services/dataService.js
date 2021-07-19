const baseService = require('./baseService');
const covid_data = require('../models/CovidData');
const RESOURCE = require('../models/Resource');
const PROVIDER = require('../models/Provider');

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

    async getResourceDetails(resource_provider_id) {
        try {
            let details = await RESOURCE.findOne({ resource_provider_id: resource_provider_id }).exec()
            return details;

        } catch (err) {
            console.log(err);
        }
    }

    async updateProvider(_id, updatedData) {
        try {
            let update = await PROVIDER.findByIdAndUpdate(_id, updatedData, { new: true })
            return update;

        } catch (err) {
            console.log(err);
        }
    }

    async updateResource(resource_provider_id, updatedData) {
        try {
            let update = await RESOURCE.findOneAndUpdate({ resource_provider_id: resource_provider_id }, updatedData, { new: true })
            return update;

        } catch (err) {
            console.log(err);
        }
    }

}


module.exports = authService;