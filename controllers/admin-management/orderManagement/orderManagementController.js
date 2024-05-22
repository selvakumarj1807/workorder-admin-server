const orderManagement = require('../../../models/admin-management/orderManagement/orderManagementModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create orderManagement - /api/v1/admin/orderManagement/new
exports.newOrderManagement = catchAsyncError(async (req, res, next) => {
    const orderManage = await orderManagement.create(req.body);
    res.status(201).json({
        success: true,
        orderManage
    })
});

//get orderManagement - /api/v1/admin/orderManagement
exports.getOrderManagement = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(orderManagement.find(), req.query).search().filter();

    const orderManage = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: orderManage.length,
        orderManage
    })
}

//get single orderManagement - /api/v1/admin/orderManagement/:id
const mongoose = require('mongoose');

exports.getSingleOrderManagement = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const orderManage = await orderManagement.findById(req.params.id);

        if (!orderManage) {
            return next(new ErrorHandler('order Management not found', 404));
        }

        res.status(200).json({
            success: true,
            orderManage
        });
    } catch (err) {
        next(err);
    }
};

//update orderManagement - /api/v1/admin/orderManagement/:id
exports.updateOrderManagement = async (req, res, next) => {
    try {
        let orderManage = await orderManagement.findById(req.params.id);

        if (!orderManage) {
            return res.status(404).json({
                success: false,
                message: "order Management not found"
            });
        }

        orderManage = await orderManagement.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            orderManage
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}