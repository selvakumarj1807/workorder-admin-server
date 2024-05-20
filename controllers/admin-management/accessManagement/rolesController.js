const Roles = require('../../../models/admin-management/accessManagement/rolesModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create roles - /api/v1/admin/roles/new
exports.newRoles = catchAsyncError(async (req, res, next) => {
    const roles = await Roles.create(req.body);
    res.status(201).json({
        success: true,
        roles
    })
});

//get roles - /api/v1/admin/roles
exports.getRoles = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Roles.find(), req.query).search().filter();

    const roles = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: roles.length,
        roles
    })
}

//get single roles - /api/v1/admin/roles/:id
const mongoose = require('mongoose');

exports.getSingleRoles = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const roles = await Roles.findById(req.params.id);

        if (!roles) {
            return next(new ErrorHandler('Roles not found', 404));
        }

        res.status(200).json({
            success: true,
            roles
        });
    } catch (err) {
        next(err);
    }
};

//update roles - /api/v1/admin/roles/:id
exports.updateRoles = async (req, res, next) => {
    try {
        let roles = await Roles.findById(req.params.id);

        if (!roles) {
            return res.status(404).json({
                success: false,
                message: "Roles not found"
            });
        }

        roles = await Roles.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            roles
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}