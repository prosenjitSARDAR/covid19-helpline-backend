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

    async getProfileData(req, res, next) {
        try {
            const { _id, name, email } = req.currentUser;

            const resourceDetails = await this.dataService.getResourceDetails(_id)
            if (resourceDetails) {
                let profileData = {
                    "name": name,
                    "email": email,
                    "resourceName": resourceDetails.resourceName,
                    "category": resourceDetails.category,
                    "address": resourceDetails.address,
                    "city": resourceDetails.city,
                    "pincode": resourceDetails.pincode,
                    "contact_number": resourceDetails.contact_number,
                    "availibility": resourceDetails.availibility,
                    "remarks": resourceDetails.remarks
                }

                return res.status(200).send({ message: "Done! Get Profile Data Successfully", success: true, data: { ...profileData } })
            } else {
                return res.status(404).send({ message: "Sorry! Profile data not found", success: false, data: {} })

            }
        } catch (err) {
            console.log(err);
            if (err.name === 'ValidationError') {
                next(createError(422, err.message));
                return;
            }
            next(err);
        }
    }

    async updateProfileData(req, res, next) {
        try {
            const { _id } = req.currentUser;

            const providerUpdate = {
                "name": req.body.name,
                "email": req.body.email
            }

            const resourceUpdate = {
                "resourceName": req.body.resourceName,
                "category": req.body.category,
                "address": req.body.address,
                "city": req.body.city,
                "pincode": req.body.pincode,
                "contact_number": req.body.contact_number,
                "availibility": req.body.availibility,
                "remarks": req.body.remarks

            }

            const updateProvider = await this.dataService.updateProvider(_id, providerUpdate)
            const updateResource = await this.dataService.updateResource(_id, resourceUpdate)

            if (updateProvider && updateResource) {
                let profileData = {
                    "name": updateProvider.name,
                    "email": updateProvider.email,
                    "resourceName": updateResource.resourceName,
                    "category": updateResource.category,
                    "address": updateResource.address,
                    "city": updateResource.city,
                    "pincode": updateResource.pincode,
                    "contact_number": updateResource.contact_number,
                    "availibility": updateResource.availibility,
                    "remarks": updateResource.remarks
                }

                return res.status(200).send({ message: "Done! Profile Data updated Successfully", success: true, data: { ...profileData } })
            }

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