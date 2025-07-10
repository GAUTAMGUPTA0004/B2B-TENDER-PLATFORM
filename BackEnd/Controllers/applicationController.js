const Application = require('../Models/applicationModel');

const applyTender = async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.status(201).json(app);
  } catch (err) {
    res.status(500).json({ message: 'Application failed', error: err.message });
  }
};

const getApplicationsByTender = async (req, res) => {
  try {
    const apps = await Application.findAll({ where: { tenderId: req.params.id } });
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

module.exports = {
  applyTender,
  getApplicationsByTender
};