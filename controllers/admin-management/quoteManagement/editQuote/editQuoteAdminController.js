const editQuoteAdmin = require('../../../../models/admin-management/quoteManagement/editQuote/editQuoteAdminModel');
const ErrorHandler = require('../../../../utils/errorHandler');
const catchAsyncError = require('../../../../middlewares/catchAsyncError');
const APIFeatures = require('../../../../utils/apiFeatures');

//create editQuoteAdmin - /api/v1/admin/editQuoteAdmin/new
exports.newEditQuoteAdmin = catchAsyncError(async (req, res, next) => {
    const editQuote = await editQuoteAdmin.create(req.body);
    res.status(201).json({
        success: true,
        editQuote
    })
});

//get editQuoteAdmin - /api/v1/admin/editQuoteAdmin
exports.getEditQuoteAdmin = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(editQuoteAdmin.find(), req.query).search().filter();

    const editQuote = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: editQuote.length,
        editQuote
    })
}

//get single editQuoteAdmin - /api/v1/admin/editQuoteAdmin/:id
const mongoose = require('mongoose');

exports.getSingleEditQuoteAdmin = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const editQuote = await editQuoteAdmin.findById(req.params.id);

        if (!editQuote) {
            return next(new ErrorHandler('edit Quote Admin not found', 404));
        }

        res.status(200).json({
            success: true,
            editQuote
        });
    } catch (err) {
        next(err);
    }
};

//update editQuoteAdmin - /api/v1/admin/editQuoteAdmin/:id
exports.updateEditQuoteAdmin = async (req, res, next) => {
    try {
        let editQuote = await editQuoteAdmin.findById(req.params.id);

        if (!editQuote) {
            return res.status(404).json({
                success: false,
                message: "edit Quote Admin not found"
            });
        }

        editQuote = await editQuoteAdmin.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            editQuote
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
