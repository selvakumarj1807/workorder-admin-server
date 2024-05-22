const { request } = require('express');
const mongoose = require('mongoose');

const adminToVendorSchema = new mongoose.Schema({
    vendor: {
        type: String,
        required: [true, "Pls enter Vendor"]
    },
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
    receivedDate: {
        type: Date,
        required: [true, "Pls enter Received Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('AdminToVendor', adminToVendorSchema);

module.exports = schema;