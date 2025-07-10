const { Op } = require('sequelize');
const Company = require('../Models/companyModel');

const searchCompanies = async (req, res) => {
  const q = req.query.q;
  try {
    const results = await Company.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { industry: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } }
        ]
      }
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};

module.exports = {
  searchCompanies
};