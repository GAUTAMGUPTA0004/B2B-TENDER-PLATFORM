import sequelize from "../utils/db";
import { DataTypes } from 'sequelize';

const Tender = sequelize.define('Tender', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  deadline: { type: DataTypes.DATE },
  budget: { type: DataTypes.INTEGER },
  companyId: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: 'Companies',
      key: 'id'
    }
  },
});

export default Tender;
