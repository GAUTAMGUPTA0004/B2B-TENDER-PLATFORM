const Tender = require('../Models/tenderModel');
const Company = require('../Models/companyModel');

const createTender = async (req, res) => {
  try {
    console.log('Creating tender with data:', req.body);
    console.log('User ID from token:', req.user?.id);
    
    if (!req.user?.id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Get the user's company first
    const userCompany = await Company.findOne({ where: { userId: req.user.id } });
    if (!userCompany) {
      return res.status(400).json({ message: 'You must create a company first before posting tenders' });
    }

    const tender = await Tender.create({ 
      ...req.body, 
      companyId: userCompany.id // Use the actual company ID
    });
    
    console.log('Tender created successfully:', tender);
    res.status(201).json(tender);
  } catch (err) {
    console.error('Tender creation error:', err);
    res.status(500).json({ message: 'Tender creation failed', error: err.message });
  }
};

const getTenders = async (req, res) => {
  try {
    const includeCompany = req.query.includeCompany === 'true';
    
    const options = includeCompany ? {
      include: [{
        model: Company,
        as: 'company',
        attributes: ['id', 'name', 'industry', 'logoUrl']
      }]
    } : {};

    const tenders = await Tender.findAll(options);
    res.status(200).json(tenders);
  } catch (err) {
    console.error('Get tenders error:', err);
    res.status(500).json({ message: 'Failed to fetch tenders', error: err.message });
  }
};

module.exports = {
  createTender,
  getTenders
};
