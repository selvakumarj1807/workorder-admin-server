const { request } = require('express');
const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    engineCode: {
        type: String,
        required: [true, "Pls enter Engine Code"]
    },
    createDate: {
        type: Date,
        required: [true, "Pls enter Create Date"]
    },
    deliveryDate: {
        type: Date,
        required: [true, "Pls enter Delivery Date"]
    },
    amount: {
        type: String,
        required: [true, "Pls enter Amount"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('InvoiceUser', InvoiceSchema);

module.exports = schema;