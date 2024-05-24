const { request } = require('express');
const mongoose = require('mongoose');

const deliveryManagementUserSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Pls enter Invoice Number"]
    },
    materialName: {
        type: String,
        required: [true, "Pls enter Material Name"]
    },
    
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'delivery',
                'waiting for payment',
                'packing'
            ],
            message: "Pls Select Correct status"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('deliveryManagementUser', deliveryManagementUserSchema);

module.exports = schema;