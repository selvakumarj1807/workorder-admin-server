const { request } = require('express');
const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Pls enter Order Number"]
    },
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    engineCode: {
        type: String,
        required: [true, "Pls enter Engine Code"]
    },
    engineType: {
        type: String,
        required: [true, "Pls enter Engine Type"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'success',
                'waiting',
                'processing',
            ],
            message: "Pls Select Correct status"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('StatusUser', StatusSchema);

module.exports = schema;