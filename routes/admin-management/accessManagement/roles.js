const express = require('express');
const { newRoles, getRoles, getSingleRoles, updateRoles } = require('../../../controllers/admin-management/accessManagement/rolesController');
const router = express.Router();

router.route('/roles/new').post(newRoles);
router.route('/roles').get(getRoles);
router.route('/roles/:id').get(getSingleRoles);
router.route('/roles/:id').put(updateRoles);

module.exports = router;