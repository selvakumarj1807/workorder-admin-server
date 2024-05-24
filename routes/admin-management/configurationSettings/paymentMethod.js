const express = require('express');
const { newPaymentMethod, getPaymentMethod, getSinglePaymentMethod, updatePaymentMethod } = require('../../../controllers/admin-management/configurationSettings/paymentMethodController');
const router = express.Router();

router.route('/paymentMethod/new').post(newPaymentMethod);
router.route('/paymentMethod').get(getPaymentMethod);
router.route('/paymentMethod/:id').get(getSinglePaymentMethod);
router.route('/paymentMethod/:id').put(updatePaymentMethod);

module.exports = router;