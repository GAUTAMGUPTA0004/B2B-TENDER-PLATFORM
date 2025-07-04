"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../utils/db"));
const sequelize_1 = require("sequelize");
const Application = db_1.default.define('Application', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    proposal: { type: sequelize_1.DataTypes.TEXT },
    tenderId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    companyId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
exports.default = Application;
