const express = require('express');
const { newHistory, getHistory, getSingleHistory } = require('../../controllers/vendor-management/historyController');
const router = express.Router();

router.route('/history/new').post(newHistory);
router.route('/history').get(getHistory);
router.route('/history/:id').get(getSingleHistory);

module.exports = router;