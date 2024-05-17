const { request } = require('express');
const mongoose = require('mongoose');

const ProductDeliveryHistorySchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Pls enter Invoice Number"]
    },
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    deliveryAddress: {
        type: String,
        required: [true, "Pls enter Delivery Address"]
    },
    sendingDate: {
        type: Date,
        required: [true, "Pls enter Created Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('ProductDeliveryHistory', ProductDeliveryHistorySchema);

module.exports = schema;