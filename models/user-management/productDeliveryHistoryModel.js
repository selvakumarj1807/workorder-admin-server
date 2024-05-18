const { request } = require('express');
const mongoose = require('mongoose');

const ProductDeliveryHistorySchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Pls enter Invoice Number"]
    },
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    deliveryAddress: {
        type: String,
        required: [true, "Pls enter Delivery Address"]
    },
    deliveryDate: {
        type: Date,
        required: [true, "Pls enter Created Date"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'packing',
                'shipping',
                'delivered',
            ],
            message: "Pls Select Correct status"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('ProductDeliveryHistoryUser', ProductDeliveryHistorySchema);

module.exports = schema;