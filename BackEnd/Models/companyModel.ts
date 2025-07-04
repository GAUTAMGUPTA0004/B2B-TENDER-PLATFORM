import sequelize from "../utils/db";
import { DataTypes } from 'sequelize';
const Company = sequelize.define('Company', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  industry: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  logoUrl: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});
export default Company;