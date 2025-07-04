"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../utils/db"));
const sequelize_1 = require("sequelize");
const Tender = db_1.default.define('Tender', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT },
    deadline: { type: sequelize_1.DataTypes.DATE },
    budget: { type: sequelize_1.DataTypes.INTEGER },
    companyId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
exports.default = Tender;
