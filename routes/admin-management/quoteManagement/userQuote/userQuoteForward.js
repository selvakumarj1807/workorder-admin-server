const express = require('express');
const { newUserQuoteForward, getUserQuoteForward, getSingleUserQuoteForward } = require('../../../../controllers/admin-management/quoteManagement/userQuote/userQuoteForwardController');
const router = express.Router();

router.route('/userQuoteForward/new').post(newUserQuoteForward);
router.route('/userQuoteForward').get(getUserQuoteForward);
router.route('/userQuoteForward/:id').get(getSingleUserQuoteForward);

module.exports = router;