const express = require('express');
const { newStatus, getStatus, getSingleStatus, updateStatus } = require('../../controllers/vendor-management/statusController');
const router = express.Router();

router.route('/status/new').post(newStatus);
router.route('/status').get(getStatus);
router.route('/status/:id').get(getSingleStatus);
router.route('/status/:id').put(updateStatus);

module.exports = router;