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


app.use('/api/v1/vendor', acknowledgement);
app.use('/api/v1/vendor', status);
app.use('/api/v1/vendor', history);
app.use('/api/v1/vendor', invoice);
app.use('/api/v1/vendor', payment);


app.use(errorMiddleware);

module.exports = app; 