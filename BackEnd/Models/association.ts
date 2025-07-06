import User from './userModel';
import Company from './companyModel';
import Tender from './tenderModel';
import Application from './applicationModel';

// User -> Company (One-to-Many)
User.hasMany(Company, { foreignKey: 'userId', as: 'companies' });
Company.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Company -> Tender (One-to-Many)
Company.hasMany(Tender, { foreignKey: 'companyId', as: 'tenders' });
Tender.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

// Company -> Application (One-to-Many)
Company.hasMany(Application, { foreignKey: 'companyId', as: 'applications' });
Application.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

// Tender -> Application (One-to-Many)
Tender.hasMany(Application, { foreignKey: 'tenderId', as: 'applications' });
Application.belongsTo(Tender, { foreignKey: 'tenderId', as: 'tender' });

export { User, Company, Tender, Application };