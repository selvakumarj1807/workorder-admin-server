const { request } = require('express');
const mongoose = require('mongoose');

const AcknowledgementSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Pls enter Order Number"]
    },
    materialName: {
        type: String,
        required: [true, "Pls enter Material Name"]
    },
    entryDate: {
        type: Date,
        required: [true, "Pls enter Entry Date"]
    },
    dueDate: {
        type: Date,
        required: [true, "Pls enter Accept Date"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'accept',
                'reject',
            ],
            message: "Pls Select Correct status"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('AcknowledgementUser', AcknowledgementSchema);

module.exports = schema;