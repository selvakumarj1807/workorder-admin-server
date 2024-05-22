const express = require('express');
const { newvendorQuoteReceived, getvendorQuoteReceived, getSinglevendorQuoteReceived } = require('../../../../controllers/admin-management/quoteManagement/vendorQuote/vendorQuoteReceivedController');
const router = express.Router();

router.route('/vendorQuoteReceived/new').post(newvendorQuoteReceived);
router.route('/vendorQuoteReceived').get(getvendorQuoteReceived);
router.route('/vendorQuoteReceived/:id').get(getSinglevendorQuoteReceived);

module.exports = router;