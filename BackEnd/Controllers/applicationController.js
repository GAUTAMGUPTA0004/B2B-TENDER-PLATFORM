"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicationsByTender = exports.applyTender = void 0;
const applicationModel_1 = __importDefault(require("../Models/applicationModel"));
const applyTender = async (req, res) => {
    try {
        const app = await applicationModel_1.default.create(req.body);
        res.status(201).json(app);
    }
    catch (err) {
        res.status(500).json({ message: 'Application failed', error: err });
    }
};
exports.applyTender = applyTender;
const getApplicationsByTender = async (req, res) => {
    try {
        const apps = await applicationModel_1.default.findAll({ where: { tenderId: req.params.id } });
        res.status(200).json(apps);
    }
    catch (err) {
        res.status(500).json({ message: 'Fetch failed', error: err });
    }
};
exports.getApplicationsByTender = getApplicationsByTender;
