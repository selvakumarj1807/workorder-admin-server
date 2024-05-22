const express = require('express');
const { newEditQuoteAdmin, getEditQuoteAdmin, getSingleEditQuoteAdmin, updateEditQuoteAdmin } = require('../../../../controllers/admin-management/quoteManagement/editQuote/editQuoteAdminController');
const router = express.Router();

router.route('/editQuoteAdmin/new').post(newEditQuoteAdmin);
router.route('/editQuoteAdmin').get(getEditQuoteAdmin);
router.route('/editQuoteAdmin/:id').get(getSingleEditQuoteAdmin);
router.route('/editQuoteAdmin/:id').put(updateEditQuoteAdmin);

module.exports = router;