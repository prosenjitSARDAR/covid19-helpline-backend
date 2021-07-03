const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        trim: true,
        lowercase: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        trim: true,
        minlength: 6
    },
    resource_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'resource',
        default: null
    }

}, { timestamps: true });


const Provider = mongoose.model('provider', providerSchema);

module.exports = Provider;