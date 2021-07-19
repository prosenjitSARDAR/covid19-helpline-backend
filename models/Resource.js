const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new mongoose.Schema({
    resourceName: {
        type: String,
        required: [true, "Please enter resource name"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please select a resource category"],
        enum: ["oxygen", "hospital", "medicine", "test-lab", "kitchen", "ambulance"],
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        required: [true, "Please enter an address"],
        trim: true
    },
    city: {
        type: String,
        required: [true, "Please enter a city name"],
        trim: true
    },
    pincode: {
        type: String,
        required: [true, "Please enter a pincode"],
        trim: true
    },
    contact_number: {
        type: String,
        required: [true, "Please enter a valid contact number"],
        trim: true,
        unique: true
    },
    resource_provider_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'provider'
    },
    availibility: {
        type: Boolean,
        default: true,
        required: [true, "Please select the availibility status of your service"]
    },
    remarks: {
        type: String,
        trim: true,
        default: null
    }
}, { timestamps: true });

const Resource = mongoose.model('resource', resourceSchema);

module.exports = Resource;