const sequelize = require("../utils/db");
const { DataTypes } = require('sequelize');

const Application = sequelize.define('Application', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  proposal: { type: DataTypes.TEXT },
  tenderId: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: 'Tenders',
      key: 'id'
    }
  },
  companyId: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: 'Companies',
      key: 'id'
    }
  },
});

module.exports = Application;