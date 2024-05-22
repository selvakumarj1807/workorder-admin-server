const express = require('express');
const { newPushNotification, getPushNotification, getSinglePushNotification } = require('../../../controllers/admin-management/pushNotification/pushNotificationController');
const router = express.Router();

router.route('/pushNotification/new').post(newPushNotification);
router.route('/pushNotification').get(getPushNotification);
router.route('/pushNotification/:id').get(getSinglePushNotification);

module.exports = router;