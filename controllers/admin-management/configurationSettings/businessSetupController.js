const businessSetup = require('../../../models/admin-management/configurationSettings/businessSetupModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create businessSetup - /api/v1/admin/businessSetup/new
exports.newBusinessSetup = catchAsyncError(async (req, res, next) => {
    const business = await businessSetup.create(req.body);
    res.status(201).json({
        success: true,
        business
    })
});

//get businessSetup - /api/v1/admin/businessSetup
exports.getBusinessSetup = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(businessSetup.find(), req.query).search().filter();

    const business = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: business.length,
        business
    })
}

//get single businessSetup - /api/v1/admin/businessSetup/:id
const mongoose = require('mongoose');

exports.getSingleBusinessSetup = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const business = await businessSetup.findById(req.params.id);

        if (!business) {
            return next(new ErrorHandler('business Setup found', 404));
        }

        res.status(200).json({
            success: true,
            business
        });
    } catch (err) {
        next(err);
    }
};

//update businessSetup - /api/v1/admin/businessSetup/:id
exports.updateBusinessSetup = async (req, res, next) => {
    try {
        let business = await businessSetup.findById(req.params.id);

        if (!business) {
            return res.status(404).json({
                success: false,
                message: "business Setup not found"
            });
        }

        business = await businessSetup.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            business
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}