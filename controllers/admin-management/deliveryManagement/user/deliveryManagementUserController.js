const deliveryManagementUser = require('../../../../models/admin-management/deliveryManagement/user/deliveryManagementUserModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create deliveryManagementUser - /api/v1/admin/deliveryManagementUser/new
exports.newDeliveryManagementUser = catchAsyncError(async (req, res, next) => {
    const user = await deliveryManagementUser.create(req.body);
    res.status(201).json({
        success: true,
        user
    })
});

//get deliveryManagementUser - /api/v1/admin/deliveryManagementUser
exports.getDeliveryManagementUser = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(deliveryManagementUser.find(), req.query).search().filter();

    const user = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: user.length,
        user
    })
}

//get single deliveryManagementUser - /api/v1/admin/deliveryManagementUser/:id
const mongoose = require('mongoose');

exports.getSingleDeliveryManagementUser = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const user = await deliveryManagementUser.findById(req.params.id);

        if (!user) {
            return next(new ErrorHandler('delivery Management User not found', 404));
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (err) {
        next(err);
    }
};

//update deliveryManagementUser - /api/v1/admin/deliveryManagementUser/:id
exports.upDatedeliveryManagementUser = async (req, res, next) => {
    try {
        let user = await deliveryManagementUser.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "delivery Management User not found"
            });
        }

        user = await deliveryManagementUser.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
