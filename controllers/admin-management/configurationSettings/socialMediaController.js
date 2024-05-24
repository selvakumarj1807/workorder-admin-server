const socialMedia = require('../../../models/admin-management/configurationSettings/socialMediaModel');
const ErrorHandler = require('../../../utils/errorHandler');
const catchAsyncError = require('../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../utils/apiFeatures');

//create socialMedia - /api/v1/admin/socialMedia/new
exports.newSocialMedia = catchAsyncError(async (req, res, next) => {
    const media = await socialMedia.create(req.body);
    res.status(201).json({
        success: true,
        media
    })
});

//get socialMedia - /api/v1/admin/socialMedia
exports.getSocialMedia = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(socialMedia.find(), req.query).search().filter();

    const media = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: media.length,
        media
    })
}

//get single socialMedia - /api/v1/admin/socialMedia/:id
const mongoose = require('mongoose');

exports.getSingleSocialMedia = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const media = await socialMedia.findById(req.params.id);

        if (!media) {
            return next(new ErrorHandler('social Media found', 404));
        }

        res.status(200).json({
            success: true,
            media
        });
    } catch (err) {
        next(err);
    }
};

//update socialMedia - /api/v1/admin/socialMedia/:id
exports.updateSocialMedia = async (req, res, next) => {
    try {
        let media = await socialMedia.findById(req.params.id);

        if (!media) {
            return res.status(404).json({
                success: false,
                message: "social media not found"
            });
        }

        media = await socialMedia.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            media
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}