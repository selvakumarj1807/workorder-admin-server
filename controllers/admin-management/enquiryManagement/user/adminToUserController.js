const adminToUser = require('../../../../models/admin-management/enquiryManagement/user/adminToUserModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create adminToUser - /api/v1/admin/adminToUser/new
exports.newAdminToUser = catchAsyncError(async (req, res, next) => {
    const admin2User = await adminToUser.create(req.body);
    res.status(201).json({
        success: true,
        admin2User
    })
});

//get adminToUser - /api/v1/admin/adminToUser
exports.getAdminToUser = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(adminToUser.find(), req.query).search().filter();

    const admin2User = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: admin2User.length,
        admin2User
    })
}

//get single adminToUser - /api/v1/admin/adminToUser/:id
const mongoose = require('mongoose');

exports.getSingleAdminToUser = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const admin2User = await adminToUser.findById(req.params.id);

        if (!admin2User) {
            return next(new ErrorHandler('Admin To User not found', 404));
        }

        res.status(200).json({
            success: true,
            admin2User
        });
    } catch (err) {
        next(err);
    }
};

//update adminToUser - /api/v1/admin/adminToUser/:id
exports.updAteadminToUser = async (req, res, next) => {
    try {
        let admin2User = await adminToUser.findById(req.params.id);

        if (!admin2User) {
            return res.status(404).json({
                success: false,
                message: "Admin To User not found"
            });
        }

        admin2User = await adminToUser.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            admin2User
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
