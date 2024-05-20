const { request } = require('express');
const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
    
    roles: {
        type: String,
        required: [true, "Pls enter roles"],
        enum: {
            values: [
                'create',
                'use',
                'edit',
                'delete',
                'file sharing',
                'download file',
                'forward file'
            ],
            message: "Pls Select Correct roles"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('PermissionAdmin', PermissionSchema);

module.exports = schema;