const { request } = require('express');
const mongoose = require('mongoose');

const pushNotificationSchema = new mongoose.Schema({
    from: {
        type: String,
        required: [true, "Pls enter From"]
    },
    message: {
        type: String,
        required: [true, "Pls enter Message"]
    },
    document: {
        type: String,
        required: [true, "Pls enter Document"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('pushNotification', pushNotificationSchema);

module.exports = schema;