const ErrorHandler = require("../utils/errorHandler");
const User = require('../models/userModel')
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken');

exports.isAuthenticateVendor = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Login first to handle this resource', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.User = await User.findById(decoded.id)
    next();
})


/*
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.Vendor.role)) {
            return next(new ErrorHandler(`Role ${req.Vendor.role} is not allowed`))
        }

        next();
    }
}
*/