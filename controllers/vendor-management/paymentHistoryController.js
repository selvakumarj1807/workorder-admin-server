const PaymentHistory = require('../../models/vendor-management/paymentHistoryModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create paymentHistory - /api/v1/paymentHistory/new
exports.newPaymentHistory = catchAsyncError(async (req, res, next) => {
    const paymentHistory = await PaymentHistory.create(req.body);
    res.status(201).json({
        success: true,
        paymentHistory
    })
});

//get paymentHistory - /api/v1/paymentHistory
exports.getPaymentHistory = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(PaymentHistory.find(), req.query).search().filter();

    const paymentHistory = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: paymentHistory.length,
        paymentHistory
    })
}

//get single paymentHistory - /api/v1/paymentHistory/:id
const mongoose = require('mongoose');

exports.getSinglePaymentHistory = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const paymentHistory = await PaymentHistory.findById(req.params.id);

        if (!paymentHistory) {
            return next(new ErrorHandler('Payment History not found', 404));
        }

        res.status(200).json({
            success: true,
            paymentHistory
        });
    } catch (err) {
        next(err);
    }
};

//update paymentHistory - /api/v1/paymentHistory/:id
exports.updatePaymentHistory = async (req, res, next) => {
    try {
        let paymentHistory = await PaymentHistory.findById(req.params.id);

        if (!paymentHistory) {
            return res.status(404).json({
                success: false,
                message: "Payment History not found"
            });
        }

        paymentHistory = await PaymentHistory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            paymentHistory
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}