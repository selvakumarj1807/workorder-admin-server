const { request } = require('express');
const mongoose = require('mongoose');

const vendorQuoteReceivedSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Pls enter Order Number"]
    },
    receivedDate: {
        type: Date,
        required: [true, "Pls enter Received Date"]
    },
    name: {
        type: String,
        required: [true, "Pls enter Name"]
    },
    engineCode: {
        type: String,
        required: [true, "Pls enter Engine Code"]
    },
    quantity: {
        type: String,
        required: [true, "Pls enter Quantity"]
    },
    unitPrice: {
        type: String,
        required: [true, "Pls enter Unit Price"]
    },
    totalPrice: {
        type: String,
        required: [true, "Pls enter Total Price"]
    },
    action: {
        type: String,
        required: [true, "Pls enter Action"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('vendorQuoteReceived', vendorQuoteReceivedSchema);

module.exports = schema;