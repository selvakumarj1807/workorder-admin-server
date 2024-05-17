const express = require('express');
const { newProductDeliveryHistory, getProductDeliveryHistory, getSingleProductDeliveryHistory } = require('../../controllers/vendor-management/productDeliveryHistoryController');
const router = express.Router();

router.route('/productDeliveryHistory/new').post(newProductDeliveryHistory);
router.route('/productDeliveryHistory').get(getProductDeliveryHistory);
router.route('/productDeliveryHistory/:id').get(getSingleProductDeliveryHistory);

module.exports = router;