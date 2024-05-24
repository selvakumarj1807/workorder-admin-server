const { request } = require('express');
const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: [true, "Pls enter Bank Name"]
    },
    accountNumber: {
        type: String,
        required: [true, "Pls enter Account Number"]
    },
    accountName: {
        type: String,
        required: [true, "Pls enter Account Name"]
    },
    ifscCode: {
        type: String,
        required: [true, "Pls enter Ifsc Code"]
    },
    branchName: {
        type: String,
        required: [true, "Pls enter Branch Name"]
    },
    upiID: {
        type: String,
        required: [true, "Pls enter UPI ID"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('paymentMethod', paymentMethodSchema);

module.exports = schema;