const Company = require('../Models/companyModel');

const createCompany = async (req, res) => {
  try {
    console.log('Creating company with data:', req.body);
    console.log('User ID from token:', req.user?.id);
    
    if (!req.user?.id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const company = await Company.create({ 
      ...req.body, 
      userId: req.user.id 
    });
    
    console.log('Company created successfully:', company);
    res.status(201).json(company);
  } catch (err) {
    console.error('Company creation error:', err);
    res.status(500).json({ message: 'Company creation failed', error: err.message });
  }
};

const getCompanies = async (req, res) => {
  try {
    // If user is authenticated, return their companies
    if (req.user) {
      const companies = await Company.findAll({ where: { userId: req.user.id } });
      res.status(200).json(companies);
    } else {
      // If no user, return all companies (for public view)
      const companies = await Company.findAll();
      res.status(200).json(companies);
    }
  } catch (err) {
    console.error('Get companies error:', err);
    res.status(500).json({ message: 'Failed to fetch companies', error: err.message });
  }
};

module.exports = {
  createCompany,
  getCompanies
};
