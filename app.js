const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')

app.use(express.json());

app.use(cookieParser());

const acknowledgement = require('./routes/vendor-management/acknowledgement')
const status = require('./routes/vendor-management/status')
const history = require('./routes/vendor-management/history')
const invoice = require('./routes/vendor-management/invoice')
const payment = require('./routes/vendor-management/payment')
const paymentHistory = require('./routes/vendor-management/paymentHistory')
const productDeliveryHistory = require('./routes/vendor-management/productDeliveryHistory')


app.use('/api/v1/vendor', acknowledgement);
app.use('/api/v1/vendor', status);
app.use('/api/v1/vendor', history);
app.use('/api/v1/vendor', invoice);
app.use('/api/v1/vendor', payment);
app.use('/api/v1/vendor', paymentHistory);
app.use('/api/v1/vendor', productDeliveryHistory);


const acknowledgementUser = require('./routes/user-management/acknowledgement')
const statusUser = require('./routes/user-management/status')
const historyUser = require('./routes/user-management/history')
const invoiceUser = require('./routes/user-management/invoice')
const paymentUser = require('./routes/user-management/payment')
const paymentHistoryUser = require('./routes/user-management/paymentHistory')
const productDeliveryHistoryUser = require('./routes/user-management/productDeliveryHistory')


app.use('/api/v1/user', acknowledgementUser);
app.use('/api/v1/user', statusUser);
app.use('/api/v1/user', historyUser);
app.use('/api/v1/user', invoiceUser);
app.use('/api/v1/user', paymentUser);
app.use('/api/v1/user', paymentHistoryUser);
app.use('/api/v1/user', productDeliveryHistoryUser);


const rolesAdmin = require('./routes/admin-management/accessManagement/roles')
const permissionAdmin = require('./routes/admin-management/accessManagement/permission')
const userToAdmin = require('./routes/admin-management/enquiryManagement/user/userToAdmin')
const adminToUser = require('./routes/admin-management/enquiryManagement/user/adminToUser')
const adminToVendor = require('./routes/admin-management/enquiryManagement/vendor/adminToVendor')
const vendorToAdmin = require('./routes/admin-management/enquiryManagement/vendor/vendorToAdmin')
const pushNotification = require('./routes/admin-management/pushNotification/pushNotification')
const vendorQuoteReceived = require('./routes/admin-management/quoteManagement/vendorQuote/vendorQuoteReceived')
const editQuoteAdmin = require('./routes/admin-management/quoteManagement/editQuote/editQuoteAdmin')
const userQuoteForward = require('./routes/admin-management/quoteManagement/userQuote/userQuoteForward')
const orderManagement = require('./routes/admin-management/orderManagement/orderManagement')
const deliveryManagementUser = require('./routes/admin-management/deliveryManagement/user/deliveryManagementUser')
const businessSetup = require('./routes/admin-management/configurationSettings/businessSetup')
const paymentMethod = require('./routes/admin-management/configurationSettings/paymentMethod')
const socialMedia = require('./routes/admin-management/configurationSettings/socialMedia')
const mailConfiguration = require('./routes/admin-management/configurationSettings/mailConfiguration')


app.use('/api/v1/admin', rolesAdmin);
app.use('/api/v1/admin', permissionAdmin);
app.use('/api/v1/admin', userToAdmin);
app.use('/api/v1/admin', adminToUser);
app.use('/api/v1/admin', adminToVendor);
app.use('/api/v1/admin', vendorToAdmin);
app.use('/api/v1/admin', pushNotification);
app.use('/api/v1/admin', vendorQuoteReceived);
app.use('/api/v1/admin', editQuoteAdmin);
app.use('/api/v1/admin', userQuoteForward);
app.use('/api/v1/admin', orderManagement);
app.use('/api/v1/admin', deliveryManagementUser);
app.use('/api/v1/admin', businessSetup);
app.use('/api/v1/admin', paymentMethod);
app.use('/api/v1/admin', socialMedia);
app.use('/api/v1/admin', mailConfiguration);


const auth = require('./routes/admin-auth/auth')

app.use('/api/v1',auth);

app.use(errorMiddleware);

module.exports = app; 