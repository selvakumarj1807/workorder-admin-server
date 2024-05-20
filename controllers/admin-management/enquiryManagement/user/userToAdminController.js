const userToAdmin = require('../../../../models/admin-management/enquiryManagement/user/userToAdminModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create userToAdmin - /api/v1/admin/userToAdmin/new
exports.newUserToAdmin = catchAsyncError(async (req, res, next) => {
    const user2Admin = await userToAdmin.create(req.body);
    res.status(201).json({
        success: true,
        user2Admin
    })
});

//get userToAdmin - /api/v1/admin/userToAdmin
exports.getUserToAdmin = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(userToAdmin.find(), req.query).search().filter();

    const user2Admin = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: user2Admin.length,
        user2Admin
    })
}

//get single userToAdmin - /api/v1/admin/userToAdmin/:id
const mongoose = require('mongoose');

exports.getSingleUserToAdmin = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const user2Admin = await userToAdmin.findById(req.params.id);

        if (!user2Admin) {
            return next(new ErrorHandler('User To Admin not found', 404));
        }

        res.status(200).json({
            success: true,
            user2Admin
        });
    } catch (err) {
        next(err);
    }
};

//update userToAdmin - /api/v1/admin/userToAdmin/:id
/*
exports.updateUserToAdmin = async (req, res, next) => {
    try {
        let user2Admin = await userToAdmin.findById(req.params.id);

        if (!user2Admin) {
            return res.status(404).json({
                success: false,
                message: "User to Admin not found"
            });
        }

        user2Admin = await userToAdmin.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            user2Admin
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
*/