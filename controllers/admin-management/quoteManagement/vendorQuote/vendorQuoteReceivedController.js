const vendorQuoteReceived = require('../../../../models/admin-management/quoteManagement/vendorQuote/vendorQuoteReceivedModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create vendorQuoteReceived - /api/v1/admin/vendorQuoteReceived/new
exports.newvendorQuoteReceived = catchAsyncError(async (req, res, next) => {
    const vendorQuote = await vendorQuoteReceived.create(req.body);
    res.status(201).json({
        success: true,
        vendorQuote
    })
});

//get vendorQuoteReceived - /api/v1/admin/vendorQuoteReceived
exports.getvendorQuoteReceived = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(vendorQuoteReceived.find(), req.query).search().filter();

    const vendorQuote = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: vendorQuote.length,
        vendorQuote
    })
}

//get single vendorQuoteReceived - /api/v1/admin/vendorQuoteReceived/:id
const mongoose = require('mongoose');

exports.getSinglevendorQuoteReceived = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const vendorQuote = await vendorQuoteReceived.findById(req.params.id);

        if (!vendorQuote) {
            return next(new ErrorHandler('vendor Quote Received not found', 404));
        }

        res.status(200).json({
            success: true,
            vendorQuote
        });
    } catch (err) {
        next(err);
    }
};