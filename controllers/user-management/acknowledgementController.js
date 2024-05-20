const Acknowledgement = require('../../models/user-management/acknowledgementModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create acknowledgement - /api/v1/acknowledgement/new
exports.newAcknowledgement = catchAsyncError(async (req, res, next) => {
    const acknowledgement = await Acknowledgement.create(req.body);
    res.status(201).json({
        success: true,
        acknowledgement
    })
});

//get acknowledgement - /api/v1/acknowledgement
exports.getAcknowledgement = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Acknowledgement.find(), req.query).search().filter();

    const acknowledgement = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: acknowledgement.length,
        acknowledgement
    })
}

//get single acknowledgement - /api/v1/acknowledgement/:id
const mongoose = require('mongoose');

exports.getSingleAcknowledgement = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const acknowledgement = await Acknowledgement.findById(req.params.id);

        if (!acknowledgement) {
            return next(new ErrorHandler('Acknowledgement not found', 404));
        }

        res.status(200).json({
            success: true,
            acknowledgement
        });
    } catch (err) {
        next(err);
    }
};

//update acknowledgement - /api/v1/acknowledgement/:id
exports.updateAcknowledgement = async (req, res, next) => {
    try {
        let acknowledgement = await Acknowledgement.findById(req.params.id);

        if (!acknowledgement) {
            return res.status(404).json({
                success: false,
                message: "Acknowledgement not found"
            });
        }

        acknowledgement = await Acknowledgement.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            acknowledgement
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}