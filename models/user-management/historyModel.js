const { request } = require('express');
const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
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
    createdDate: {
        type: Date,
        required: [true, "Pls enter Created Date"]
    },
    deliveryDate: {
        type: Date,
        required: [true, "Pls enter Delivery Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('HistoryUser', HistorySchema);

module.exports = schema;