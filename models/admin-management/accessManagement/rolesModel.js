const { request } = require('express');
const mongoose = require('mongoose');

const RolesSchema = new mongoose.Schema({
    idNo: {
        type: String,
        required: [true, "Pls enter Id Number"]
    },
    name: {
        type: String,
        required: [true, "Pls enter Name"]
    },
    
    roles: {
        type: String,
        required: [true, "Pls enter roles"],
        enum: {
            values: [
                'employee',
                'supervisor',
                'manager',
                'general manager'
            ],
            message: "Pls Select Correct roles"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('RolesAdmin', RolesSchema);

module.exports = schema;