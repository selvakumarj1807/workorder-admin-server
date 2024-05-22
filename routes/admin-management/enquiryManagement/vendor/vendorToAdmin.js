const express = require('express');
const { newVendorToAdmin, getVendorToAdmin, getSingleVendorToAdmin, updateVendorToAdmin } = require('../../../../controllers/admin-management/enquiryManagement/vendor/vendorToAdminController');
const router = express.Router();

router.route('/vendorToAdmin/new').post(newVendorToAdmin);
router.route('/vendorToAdmin').get(getVendorToAdmin);
router.route('/vendorToAdmin/:id').get(getSingleVendorToAdmin);
router.route('/vendorToAdmin/:id').put(updateVendorToAdmin);

module.exports = router;