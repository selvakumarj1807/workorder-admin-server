const ProductDeliveryHistory = require('../../models/user-management/productDeliveryHistoryModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create productDeliveryHistory - /api/v1/productDeliveryHistory/new
exports.newProductDeliveryHistory = catchAsyncError(async (req, res, next) => {
    const productDeliveryHistory = await ProductDeliveryHistory.create(req.body);
    res.status(201).json({
        success: true,
        productDeliveryHistory
    })
});

//get productDeliveryHistory - /api/v1/productDeliveryHistory
exports.getProductDeliveryHistory = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(ProductDeliveryHistory.find(), req.query).search().filter();

    const productDeliveryHistory = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: productDeliveryHistory.length,
        productDeliveryHistory
    })
}

//get single productDeliveryHistory - /api/v1/productDeliveryHistory/:id
const mongoose = require('mongoose');

exports.getSingleProductDeliveryHistory = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const productDeliveryHistory = await ProductDeliveryHistory.findById(req.params.id);

        if (!productDeliveryHistory) {
            return next(new ErrorHandler('History not found', 404));
        }

        res.status(200).json({
            success: true,
            productDeliveryHistory
        });
    } catch (err) {
        next(err);
    }
};

