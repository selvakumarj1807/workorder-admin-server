const express = require('express');
const { newDeliveryManagementUser, getDeliveryManagementUser, getSingleDeliveryManagementUser, upDatedeliveryManagementUser } = require('../../../../controllers/admin-management/deliveryManagement/user/deliveryManagementUserController');
const router = express.Router();

router.route('/deliveryManagementUser/new').post(newDeliveryManagementUser);
router.route('/deliveryManagementUser').get(getDeliveryManagementUser);
router.route('/deliveryManagementUser/:id').get(getSingleDeliveryManagementUser);
router.route('/deliveryManagementUser/:id').put(upDatedeliveryManagementUser);

module.exports = router;