const { request } = require('express');
const mongoose = require('mongoose');

const PaymentHistorySchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Pls enter Invoice Number"]
    },
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    amount: {
        type: String,
        required: [true, "Pls enter Amount"]
    },
    paymentDate: {
        type: Date,
        required: [true, "Pls enter Payment Date"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'paid',
                'unpaid',
            ],
            message: "Pls Select Correct status"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('PaymentHistoryUser', PaymentHistorySchema);

module.exports = schema;