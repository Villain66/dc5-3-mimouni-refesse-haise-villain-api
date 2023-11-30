const campaigns = [
    {
        id: 1,
        nom: "Campagne 1",
        description: "Campagne SEO",
        date_debut: "2023-01-01",
        date_fin: "2023-09-01",
        budget: 12000,
    },
    {
        id: 2,
        nom: "Campagne 2",
        description: "Campagne SEA",
        date_debut: "2023-07-01",
        date_fin: "2023-09-01",
        budget: 17000,
    },
    {
        id: 3,
        nom: "Campagne 3",
        description: "Campagne SMO",
        date_debut: "2023-02-01",
        date_fin: "2023-09-01",
        budget: 11000,
    },
    {
        id: 4,
        nom: "Campagne 4",
        description: "Campagne SMA",
        date_debut: "2023-06-01",
        date_fin: "2023-09-01",
        budget: 13000,
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(campaigns))));
  }
  
  exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(campaigns)).find(campaign =>
            campaign.id == id)
        )
    );
}