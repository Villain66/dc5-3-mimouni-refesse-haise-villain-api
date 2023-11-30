const express = require('express');
const router = express.Router();
const campaigns = require('../controllers/controllers');

router.get('/', campaigns.getAllCampaigns);
router.get('/:id', campaigns.getCampaignById);
router.post('/', campaigns.createCampaign);
router.delete('/:id', campaigns.deleteCampaign);

module.exports = router;
