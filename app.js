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
//const status = require('./routes/user-management/status')

app.use('/api/v1/user', acknowledgementUser);
//app.use('/api/v1/user', status);

app.use(errorMiddleware);

module.exports = app; 