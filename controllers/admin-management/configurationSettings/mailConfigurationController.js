const mailConfiguration = require('../../../models/admin-management/configurationSettings/mailConfigurationModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create mailConfiguration - /api/v1/admin/mailConfiguration/new
exports.newMailConfiguration = catchAsyncError(async (req, res, next) => {
    const mail = await mailConfiguration.create(req.body);
    res.status(201).json({
        success: true,
        mail
    })
});

//get mailConfiguration - /api/v1/admin/mailConfiguration
exports.getMailConfiguration = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(mailConfiguration.find(), req.query).search().filter();

    const mail = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: mail.length,
        mail
    })
}

//get single mailConfiguration - /api/v1/admin/mailConfiguration/:id
const mongoose = require('mongoose');

exports.getSingleMailConfiguration = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const mail = await mailConfiguration.findById(req.params.id);

        if (!mail) {
            return next(new ErrorHandler('mail Configuration found', 404));
        }

        res.status(200).json({
            success: true,
            mail
        });
    } catch (err) {
        next(err);
    }
};