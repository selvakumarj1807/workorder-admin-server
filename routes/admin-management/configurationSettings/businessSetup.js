const express = require('express');
const { newBusinessSetup, getBusinessSetup, getSingleBusinessSetup, updateBusinessSetup } = require('../../../controllers/admin-management/configurationSettings/businessSetupController');
const router = express.Router();

router.route('/businessSetup/new').post(newBusinessSetup);
router.route('/businessSetup').get(getBusinessSetup);
router.route('/businessSetup/:id').get(getSingleBusinessSetup);
router.route('/businessSetup/:id').put(updateBusinessSetup);

module.exports = router;