const express = require('express');
const { newAdminToVendor, getAdminToVendor, getSingleAdminToVendor, updateAdminToVendor } = require('../../../../controllers/admin-management/enquiryManagement/vendor/adminToVendorController');
const router = express.Router();

router.route('/adminToVendor/new').post(newAdminToVendor);
router.route('/adminToVendor').get(getAdminToVendor);
router.route('/adminToVendor/:id').get(getSingleAdminToVendor);
router.route('/adminToVendor/:id').put(updateAdminToVendor);

module.exports = router;