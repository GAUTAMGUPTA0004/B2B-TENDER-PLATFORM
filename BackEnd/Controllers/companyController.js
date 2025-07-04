"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanies = exports.createCompany = void 0;
const companyModel_1 = __importDefault(require("../Models/companyModel"));
const createCompany = async (req, res) => {
    try {
        const company = await companyModel_1.default.create(Object.assign(Object.assign({}, req.body), { userId: req.user.id }));
        res.status(201).json(company);
    }
    catch (err) {
        res.status(500).json({ message: 'Company creation failed', error: err });
    }
};
exports.createCompany = createCompany;
const getCompanies = async (_req, res) => {
    try {
        const companies = await companyModel_1.default.findAll();
        res.status(200).json(companies);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to fetch companies', error: err });
    }
};
exports.getCompanies = getCompanies;
