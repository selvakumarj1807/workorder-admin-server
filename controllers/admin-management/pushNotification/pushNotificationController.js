const pushNotification = require('../../../models/admin-management/pushNotification/pushNotificationModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create pushNotification - /api/v1/admin/pushNotification/new
exports.newPushNotification = catchAsyncError(async (req, res, next) => {
    const push = await pushNotification.create(req.body);
    res.status(201).json({
        success: true,
        push
    })
});

//get pushNotification - /api/v1/admin/pushNotification
exports.getPushNotification = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(pushNotification.find(), req.query).search().filter();

    const push = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: push.length,
        push
    })
}

//get single pushNotification - /api/v1/admin/pushNotification/:id
const mongoose = require('mongoose');

exports.getSinglePushNotification = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const push = await pushNotification.findById(req.params.id);

        if (!push) {
            return next(new ErrorHandler('push Notification not found', 404));
        }

        res.status(200).json({
            success: true,
            push
        });
    } catch (err) {
        next(err);
    }
};