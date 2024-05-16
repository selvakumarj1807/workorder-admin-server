const Status = require('../../models/vendor-management/statusModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create status - /api/v1/status/new
exports.newStatus = catchAsyncError(async (req, res, next) => {
    const status = await Status.create(req.body);
    res.status(201).json({
        success: true,
        status
    })
});

//get status - /api/v1/status
exports.getStatus = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Status.find(), req.query).search().filter();

    const status = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: status.length,
        status
    })
}

//get single status - /api/v1/status/:id
const mongoose = require('mongoose');

exports.getSingleStatus = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const status = await Status.findById(req.params.id);

        if (!status) {
            return next(new ErrorHandler('Tracking not found', 404));
        }

        res.status(200).json({
            success: true,
            status
        });
    } catch (err) {
        next(err);
    }
};

//update status - /api/v1/status/:id
exports.updateStatus = async (req, res, next) => {
    try {
        let status = await Status.findById(req.params.id);

        if (!status) {
            return res.status(404).json({
                success: false,
                message: "Status not found"
            });
        }

        status = await Status.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            status
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}