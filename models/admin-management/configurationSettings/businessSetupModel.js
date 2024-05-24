const { request } = require('express');
const mongoose = require('mongoose');

const businessSetupSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: [true, "Pls enter Business Name"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Pls enter Mobile Number"]
    },
    email: {
        type: String,
        required: [true, "Pls enter Email"]
    },
    telephoneNumber: {
        type: String,
        required: [true, "Pls enter Telephone Number"]
    },
    streetAddress: {
        type: String,
        required: [true, "Pls enter street Address"]
    },
    streetAddressLine2: {
        type: String,
        required: [true, "Pls enter street Address Line 2"]
    },
    city: {
        type: String,
        required: [true, "Pls enter city"]
    },
    pinCode: {
        type: String,
        required: [true, "Pls enter Pin Code"]
    },
    logo: {
        type: String,
        required: [true, "Pls enter Logo"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('businessSetup', businessSetupSchema);

module.exports = schema;