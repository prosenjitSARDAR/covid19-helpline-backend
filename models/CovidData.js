const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const covidDataSchema = new mongoose.Schema({
    country: {
        type: String,
        default: "India"
    },
    country_code: {
        type: String
    },
    province: {
        type: String
    },
    city: {
        type: String
    },
    cityCode: {
        type: String
    },
    lat: {
        type: String
    },
    lon: {
        type: String
    },
    confirmed: {
        type: Number,
        required: true
    },
    deaths: {
        type: Number,
        required: true
    },
    recovered: {
        type: Number,
        required: true
    },
    active: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

}, { timestamps: true });


const covid_data = mongoose.model('covid_data', covidDataSchema);

module.exports = covid_data;