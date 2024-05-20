const { request } = require('express');
const mongoose = require('mongoose');

const adminToUserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "Pls enter User"]
    },
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
    forwardDate: {
        type: Date,
        required: [true, "Pls enter Forward Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('AdminToUser', adminToUserSchema);

module.exports = schema;