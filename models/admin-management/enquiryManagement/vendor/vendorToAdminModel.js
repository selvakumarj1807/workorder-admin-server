const { request } = require('express');
const mongoose = require('mongoose');

const vendorToAdminSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Pls enter Name"]
    },
    engineCode: {
        type: String,
        required: [true, "Pls enter Engine Code"]
    },
    engineType: {
        type: String,
        required: [true, "Pls enter Engine Type"]
    },
    vendor: {
        type: String,
        required: [true, "Pls enter Vendor"]
    },
    forwardDate: {
        type: Date,
        required: [true, "Pls enter Forward Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('VendorToAdmin', vendorToAdminSchema);

module.exports = schema;