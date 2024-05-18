const Payment = require('../../models/user-management/paymentModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create payment - /api/v1/payment/new
exports.newPayment = catchAsyncError(async (req, res, next) => {
    const payment = await Payment.create(req.body);
    res.status(201).json({
        success: true,
        payment
    })
});