const { request } = require('express');
const mongoose = require('mongoose');

const mailConfigurationSchema = new mongoose.Schema({
    fromMail: {
        type: String,
        required: [true, "Pls enter From Mail"]
    },
    toMail: {
        type: String,
        required: [true, "Pls enter To Mail"]
    },
    ccMail: {
        type: String,
        required: [true, "Pls enter cc Mail"]
    },
    subject: {
        type: String,
        required: [true, "Pls enter Subject"]
    },
    message: {
        type: String,
        required: [true, "Pls enter Message"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('mailConfiguration', mailConfigurationSchema);

module.exports = schema;