const History = require('../../models/user-management/historyModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create history - /api/v1/history/new
exports.newHistory = catchAsyncError(async (req, res, next) => {
    const history = await History.create(req.body);
    res.status(201).json({
        success: true,
        history
    })
});

//get history - /api/v1/history
exports.getHistory = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(History.find(), req.query).search().filter();

    const history = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: history.length,
        history
    })
}

//get single history - /api/v1/history/:id
const mongoose = require('mongoose');

exports.getSingleHistory = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const history = await History.findById(req.params.id);

        if (!history) {
            return next(new ErrorHandler('History not found', 404));
        }

        res.status(200).json({
            success: true,
            history
        });
    } catch (err) {
        next(err);
    }
};

