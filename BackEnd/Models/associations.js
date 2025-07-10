const User = require('./userModel');
const Company = require('./companyModel');
const Tender = require('./tenderModel');
const Application = require('./applicationModel');

// Associations
User.hasMany(Company, { foreignKey: 'userId', as: 'companies' });
Company.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Company.hasMany(Tender, { foreignKey: 'companyId', as: 'tenders' });
Tender.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

Company.hasMany(Application, { foreignKey: 'companyId', as: 'applications' });
Application.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

Tender.hasMany(Application, { foreignKey: 'tenderId', as: 'applications' });
Application.belongsTo(Tender, { foreignKey: 'tenderId', as: 'tender' });

module.exports = { User, Company, Tender, Application };