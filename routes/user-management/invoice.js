const express = require('express');
const { newInvoice, getInvoice, getSingleInvoice, updateInvoice } = require('../../controllers/user-management/invoiceController');
const router = express.Router();

router.route('/invoice/new').post(newInvoice);
router.route('/invoice').get(getInvoice);
router.route('/invoice/:id').get(getSingleInvoice);
router.route('/invoice/:id').put(updateInvoice);

module.exports = router;