const { request } = require('express');
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: [true, "Pls enter Account Number"]
    },
    accountHolderName: {
        type: String,
        required: [true, "Pls enter Account Holder Name"]
    },
    ifscCode: {
        type: String,
        required: [true, "Pls enter IFSC Code"]
    },
    branchName: {
        type: String,
        required: [true, "Pls enter Branch Name"]
    },
    amount: {
        type: String,
        required: [true, "Pls enter Amount"]
    },
    upiId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('PaymentUser', PaymentSchema);

module.exports = schema;