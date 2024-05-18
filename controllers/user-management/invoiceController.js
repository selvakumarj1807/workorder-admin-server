const Invoice = require('../../models/user-management/invoiceModel');
const ErrorHandler = require('../../utils/errorHandler');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');

//create invoice - /api/v1/invoice/new
exports.newInvoice = catchAsyncError(async (req, res, next) => {
    const invoice = await Invoice.create(req.body);
    res.status(201).json({
        success: true,
        invoice
    })
});

//get invoice - /api/v1/invoice
exports.getInvoice = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Invoice.find(), req.query).search().filter();

    const invoice = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: invoice.length,
        invoice
    })
}

//get single invoice - /api/v1/invoice/:id
const mongoose = require('mongoose');

exports.getSingleInvoice = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const invoice = await Invoice.findById(req.params.id);

        if (!invoice) {
            return next(new ErrorHandler('Tracking not found', 404));
        }

        res.status(200).json({
            success: true,
            invoice
        });
    } catch (err) {
        next(err);
    }
};

//update invoice - /api/v1/invoice/:id
exports.updateInvoice = async (req, res, next) => {
    try {
        let invoice = await Invoice.findById(req.params.id);

        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found"
            });
        }

        invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            invoice
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}