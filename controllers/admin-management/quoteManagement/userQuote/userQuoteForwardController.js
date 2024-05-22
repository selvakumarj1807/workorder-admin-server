const userQuoteForward = require('../../../../models/admin-management/quoteManagement/userQuote/userQuoteForwardModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create userQuoteForward - /api/v1/admin/userQuoteForward/new
exports.newUserQuoteForward = catchAsyncError(async (req, res, next) => {
    const userQuote = await userQuoteForward.create(req.body);
    res.status(201).json({
        success: true,
        userQuote
    })
});

//get userQuoteForward - /api/v1/admin/userQuoteForward
exports.getUserQuoteForward = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(userQuoteForward.find(), req.query).search().filter();

    const userQuote = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: userQuote.length,
        userQuote
    })
}

//get single userQuoteForward - /api/v1/admin/userQuoteForward/:id
const mongoose = require('mongoose');

exports.getSingleUserQuoteForward = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const userQuote = await userQuoteForward.findById(req.params.id);

        if (!userQuote) {
            return next(new ErrorHandler('user Quote Forward not found', 404));
        }

        res.status(200).json({
            success: true,
            userQuote
        });
    } catch (err) {
        next(err);
    }
};