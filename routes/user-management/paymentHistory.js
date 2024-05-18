const express = require('express');
const { newPaymentHistory, getPaymentHistory, getSinglePaymentHistory, updatePaymentHistory } = require('../../controllers/user-management/paymentHistoryController');
const router = express.Router();

router.route('/paymentHistory/new').post(newPaymentHistory);
router.route('/paymentHistory').get(getPaymentHistory);
router.route('/paymentHistory/:id').get(getSinglePaymentHistory);
router.route('/paymentHistory/:id').put(updatePaymentHistory);

module.exports = router;