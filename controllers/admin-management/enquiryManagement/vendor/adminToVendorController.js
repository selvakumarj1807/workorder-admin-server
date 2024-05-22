const adminToVendor = require('../../../../models/admin-management/enquiryManagement/vendor/adminToVendorModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create adminToVendor - /api/v1/admin/adminToVendor/new
exports.newAdminToVendor = catchAsyncError(async (req, res, next) => {
    const admin2Vendor = await adminToVendor.create(req.body);
    res.status(201).json({
        success: true,
        admin2Vendor
    })
});

//get adminToVendor - /api/v1/admin/adminToVendor
exports.getAdminToVendor = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(adminToVendor.find(), req.query).search().filter();

    const admin2Vendor = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: admin2Vendor.length,
        admin2Vendor
    })
}

//get single adminToVendor - /api/v1/admin/adminToVendor/:id
const mongoose = require('mongoose');

exports.getSingleAdminToVendor = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const admin2Vendor = await adminToVendor.findById(req.params.id);

        if (!admin2Vendor) {
            return next(new ErrorHandler('Admin To Vendor not found', 404));
        }

        res.status(200).json({
            success: true,
            admin2Vendor
        });
    } catch (err) {
        next(err);
    }
};

//update adminToVendor - /api/v1/admin/adminToVendor/:id
exports.updateAdminToVendor = async (req, res, next) => {
    try {
        let admin2Vendor = await adminToVendor.findById(req.params.id);

        if (!admin2Vendor) {
            return res.status(404).json({
                success: false,
                message: "Admin To Vendor not found"
            });
        }

        admin2Vendor = await adminToVendor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            admin2Vendor
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
