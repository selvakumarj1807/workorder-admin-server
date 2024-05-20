const express = require('express');
const { newUserToAdmin, getUserToAdmin, getSingleUserToAdmin } = require('../../../../controllers/admin-management/enquiryManagement/user/userToAdminController');
//const { newUserToAdmin, getUserToAdmin, getSingleUserToAdmin, updateUserToAdmin } = require('../../../../controllers/admin-management/enquiryManagement/user/userToAdminController');
const router = express.Router();

router.route('/userToAdmin/new').post(newUserToAdmin);
router.route('/userToAdmin').get(getUserToAdmin);
router.route('/userToAdmin/:id').get(getSingleUserToAdmin);
//router.route('/userToAdmin/:id').put(updateUserToAdmin);

module.exports = router;