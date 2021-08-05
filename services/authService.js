const PROVIDER = require('../models/Provider');
const RESOURCE = require('../models/Resource');

class authService {

    constructor() {
        
    }

    async isEmailExistCheck(email) {
        try {
            let Email = await PROVIDER.findOne({ email: email })
            if (Email) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async createProvider(reqBody, hashedPassword) {
        try {
            const provider = new PROVIDER({
                name: reqBody.name,
                email: reqBody.email,
                password: hashedPassword,
            })
            const Provider = await provider.save();
            return Provider;

        } catch (err) {
            console.log(err)
        }
    }

    async createResource(body, provider_id) {
        try {
            const resource = new RESOURCE({
                resourceName: body.resourceName,
                category: body.category,
                address: body.address,
                city: body.city,
                pincode: body.pincode,
                contact_number: body.contact_number,
                resource_provider_id: provider_id,
                availibility: body.availibility,
                remarks: body.remarks
            })
            const Resource = await resource.save();
            return Resource;

        } catch (err) {
            console.log(err)
        }
    }

    insertResourceIdIntoProvider(resourceId, provider_id) {
        return PROVIDER.findByIdAndUpdate(provider_id, { resource_id: resourceId }, { new: true }).exec()
    }

    saveNewPassword(Id, newPassword) {
        return PROVIDER.findByIdAndUpdate(Id, { password: newPassword }, { new: true }).exec()
    }


}


module.exports = authService;