import sequelize from "../utils/db";
import { DataTypes } from 'sequelize';


const Application = sequelize.define('Application', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  proposal: { type: DataTypes.TEXT },
  tenderId: { type: DataTypes.INTEGER, allowNull: false },
  companyId: { type: DataTypes.INTEGER, allowNull: false },
});

export default Application;