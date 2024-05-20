const Permission = require('../../../models/admin-management/accessManagement/permissionModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create permissionAdmin - /api/v1/admin/permissionAdmin/new
exports.newPermission = catchAsyncError(async (req, res, next) => {
    const permission = await Permission.create(req.body);
    res.status(201).json({
        success: true,
        permission
    })
});

//get permissionAdmin - /api/v1/admin/permissionAdmin
exports.getPermission = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Permission.find(), req.query).search().filter();

    const permission = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: permission.length,
        permission
    })
}

//get single permissionAdmin - /api/v1/admin/permissionAdmin/:id
const mongoose = require('mongoose');

exports.getSinglePermission = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const permission = await Permission.findById(req.params.id);

        if (!permission) {
            return next(new ErrorHandler('Permission not found', 404));
        }

        res.status(200).json({
            success: true,
            permission
        });
    } catch (err) {
        next(err);
    }
};

//update permissionAdmin - /api/v1/admin/permissionAdmin/:id
exports.updatePermission = async (req, res, next) => {
    try {
        let permission = await Permission.findById(req.params.id);

        if (!permission) {
            return res.status(404).json({
                success: false,
                message: "Permission not found"
            });
        }

        permission = await Permission.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            permission
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}