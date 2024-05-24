const paymentMethod = require('../../../models/admin-management/configurationSettings/paymentMethodModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create paymentMethod - /api/v1/admin/paymentMethod/new
exports.newPaymentMethod = catchAsyncError(async (req, res, next) => {
    const payment = await paymentMethod.create(req.body);
    res.status(201).json({
        success: true,
        payment
    })
});

//get paymentMethod - /api/v1/admin/paymentMethod
exports.getPaymentMethod = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(paymentMethod.find(), req.query).search().filter();

    const payment = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: payment.length,
        payment
    })
}

//get single paymentMethod - /api/v1/admin/paymentMethod/:id
const mongoose = require('mongoose');

exports.getSinglePaymentMethod = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const payment = await paymentMethod.findById(req.params.id);

        if (!payment) {
            return next(new ErrorHandler('payment Method found', 404));
        }

        res.status(200).json({
            success: true,
            payment
        });
    } catch (err) {
        next(err);
    }
};

//update paymentMethod - /api/v1/admin/paymentMethod/:id
exports.updatePaymentMethod = async (req, res, next) => {
    try {
        let payment = await paymentMethod.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "payment method not found"
            });
        }

        payment = await paymentMethod.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            payment
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}