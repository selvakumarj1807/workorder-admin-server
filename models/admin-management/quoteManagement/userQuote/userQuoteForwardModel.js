const { request } = require('express');
const mongoose = require('mongoose');

const userQuoteForwardSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Pls enter Order Number"]
    },
    forwardDate: {
        type: Date,
        required: [true, "Pls enter Forward Date"]
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

let schema = mongoose.model('userQuoteForward', userQuoteForwardSchema);

module.exports = schema;