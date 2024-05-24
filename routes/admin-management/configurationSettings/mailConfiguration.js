const express = require('express');
const { newMailConfiguration, getMailConfiguration, getSingleMailConfiguration } = require('../../../controllers/admin-management/configurationSettings/mailConfigurationController');
const router = express.Router();

router.route('/mailConfiguration/new').post(newMailConfiguration);
router.route('/mailConfiguration').get(getMailConfiguration);
router.route('/mailConfiguration/:id').get(getSingleMailConfiguration);

module.exports = router;