const express = require('express');
const { newAdminToUser, getAdminToUser, getSingleAdminToUser, updAteadminToUser } = require('../../../../controllers/admin-management/enquiryManagement/user/adminToUserController');
const router = express.Router();

router.route('/adminToUser/new').post(newAdminToUser);
router.route('/adminToUser').get(getAdminToUser);
router.route('/adminToUser/:id').get(getSingleAdminToUser);
router.route('/adminToUser/:id').put(updAteadminToUser);

module.exports = router;