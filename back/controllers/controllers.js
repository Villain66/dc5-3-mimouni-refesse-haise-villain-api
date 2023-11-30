const uuid = require('uuid');
const campaigns = require('../campaigns/campaigns');

exports.getAllCampaigns = (req, res, next) => {
  res.status(200).json(campaigns);
};

exports.getCampaignById = (req, res, next) => {
  const campaignId = req.params.id;
  const campaign = getCampaignById(campaignId);

  if (campaign) {
    res.status(200).json(campaign);
  } else {
    res.status(404).send(new Error('Campaign not found!'));
  }
};

exports.createCampaign = (req, res, next) => {
  const newCampaign = req.body;
  newCampaign.id = uuid();

  campaigns.push(newCampaign);

  res.status(201).json(newCampaign);
};

exports.deleteCampaign = (req, res, next) => {
  const campaignId = req.params.id;
  const index = campaigns.findIndex(c => c.id === campaignId);

  if (index !== -1) {
    campaigns.splice(index, 1);
    res.status(200).json({ message: 'Campaign deleted successfully' });
  } else {
    res.status(404).send(new Error('Campaign not found!'));
  }
};

function getCampaignById(id) {
  return campaigns.find(c => c.id === id);
}
