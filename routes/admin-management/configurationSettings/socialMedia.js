const express = require('express');
const { newSocialMedia, getSocialMedia, getSingleSocialMedia, updateSocialMedia } = require('../../../controllers/admin-management/configurationSettings/socialMediaController');
const router = express.Router();

router.route('/socialMedia/new').post(newSocialMedia);
router.route('/socialMedia').get(getSocialMedia);
router.route('/socialMedia/:id').get(getSingleSocialMedia);
router.route('/socialMedia/:id').put(updateSocialMedia);

module.exports = router;