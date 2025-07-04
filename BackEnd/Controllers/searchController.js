"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCompanies = void 0;
const sequelize_1 = require("sequelize");
const companyModel_1 = __importDefault(require("../Models/companyModel"));
const searchCompanies = async (req, res) => {
    const q = req.query.q;
    try {
        const results = await companyModel_1.default.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { industry: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } }
                ]
            }
        });
        res.status(200).json(results);
    }
    catch (err) {
        res.status(500).json({ message: 'Search failed', error: err });
    }
};
exports.searchCompanies = searchCompanies;
