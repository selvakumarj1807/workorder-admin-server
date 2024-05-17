const express = require('express');
const { newAcknowledgement, getAcknowledgement, getSingleAcknowledgement, updateAcknowledgement } = require('../../controllers/user-management/acknowledgementController');
const router = express.Router();

router.route('/acknowledgement/new').post(newAcknowledgement);
router.route('/acknowledgement').get(getAcknowledgement);
router.route('/acknowledgement/:id').get(getSingleAcknowledgement);
router.route('/acknowledgement/:id').put(updateAcknowledgement);

module.exports = router;