const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter resource name"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please select a resource category"],
        trim: true
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
    resource_provider: {
        type: mongoose.Schema.ObjectId,
        ref: 'Provider'
    },
    availibility: {
        type: Boolean,
        default: true,
        required: true
    },
    remarks: {
        type: String,
        trim: true
    }
}, { timestamps: true });

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;