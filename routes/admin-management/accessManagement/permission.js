const express = require('express');
const { newPermission, getPermission, getSinglePermission, updatePermission } = require('../../../controllers/admin-management/accessManagement/permissionController');
const router = express.Router();

router.route('/permissionAdmin/new').post(newPermission);
router.route('/permissionAdmin').get(getPermission);
router.route('/permissionAdmin/:id').get(getSinglePermission);
router.route('/permissionAdmin/:id').put(updatePermission);

module.exports = router;