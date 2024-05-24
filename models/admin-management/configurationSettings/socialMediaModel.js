const { request } = require('express');
const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    facebook: {
        type: String,
        required: [true, "Pls enter Facebook"]
    },
    whatsApp: {
        type: String,
        required: [true, "Pls enter WhatsApp"]
    },
    twitter: {
        type: String,
        required: [true, "Pls enter twitter"]
    },
    instagram: {
        type: String,
        required: [true, "Pls enter Instagram"]
    },
    telegram: {
        type: String,
        required: [true, "Pls enter telegram"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('socialMedia', socialMediaSchema);

module.exports = schema;