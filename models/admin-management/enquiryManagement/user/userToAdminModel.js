const { request } = require('express');
const mongoose = require('mongoose');

const userToAdminSchema = new mongoose.Schema({
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
    category: {
        type: String,
        required: [true, "Pls enter Category"]
    },
    action: {
        type: String,
        required: [true, "Pls enter action"],
        enum: {
            values: [
                'forward'
            ],
            message: "Pls Select Correct action"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('UserToAdmin', userToAdminSchema);

module.exports = schema;