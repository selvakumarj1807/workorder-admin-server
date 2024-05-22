const vendorToAdmin = require('../../../../models/admin-management/enquiryManagement/vendor/vendorToAdminModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create vendorToAdmin - /api/v1/admin/vendorToAdmin/new
exports.newVendorToAdmin = catchAsyncError(async (req, res, next) => {
    const vendor2Admin = await vendorToAdmin.create(req.body);
    res.status(201).json({
        success: true,
        vendor2Admin
    })
});

//get vendorToAdmin - /api/v1/admin/vendorToAdmin
exports.getVendorToAdmin = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(vendorToAdmin.find(), req.query).search().filter();

    const vendor2Admin = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: vendor2Admin.length,
        vendor2Admin
    })
}

//get single vendorToAdmin - /api/v1/admin/vendorToAdmin/:id
const mongoose = require('mongoose');

exports.getSingleVendorToAdmin = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const vendor2Admin = await vendorToAdmin.findById(req.params.id);

        if (!vendor2Admin) {
            return next(new ErrorHandler('vendor To Admin not found', 404));
        }

        res.status(200).json({
            success: true,
            vendor2Admin
        });
    } catch (err) {
        next(err);
    }
};

//update vendorToAdmin - /api/v1/admin/vendorToAdmin/:id
exports.updateVendorToAdmin = async (req, res, next) => {
    try {
        let vendor2Admin = await vendorToAdmin.findById(req.params.id);

        if (!vendor2Admin) {
            return res.status(404).json({
                success: false,
                message: "vendor To Admin not found"
            });
        }

        vendor2Admin = await vendorToAdmin.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            vendor2Admin
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
