const express = require('express');
const { newOrderManagement, getOrderManagement, getSingleOrderManagement, updateOrderManagement } = require('../../../controllers/admin-management/orderManagement/orderManagementController');
const router = express.Router();

router.route('/orderManagement/new').post(newOrderManagement);
router.route('/orderManagement').get(getOrderManagement);
router.route('/orderManagement/:id').get(getSingleOrderManagement);
router.route('/orderManagement/:id').put(updateOrderManagement);

module.exports = router;