const { request } = require('express');
const mongoose = require('mongoose');

const orderManagementSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Pls enter Order Number"]
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
    action: {
        type: String,
        required: [true, "Pls enter action"],
        enum: {
            values: [
                'accept',
                'cancel'
            ],
            message: "Pls Select Correct action"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('orderManagement', orderManagementSchema);

module.exports = schema;