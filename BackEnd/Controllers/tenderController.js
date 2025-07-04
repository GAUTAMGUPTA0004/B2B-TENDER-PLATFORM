"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTenders = exports.createTender = void 0;
const tenderModel_1 = __importDefault(require("../Models/tenderModel"));
const createTender = async (req, res) => {
    try {
        const tender = await tenderModel_1.default.create(Object.assign(Object.assign({}, req.body), { companyId: req.user.id }));
        res.status(201).json(tender);
    }
    catch (err) {
        res.status(500).json({ message: 'Tender creation failed', error: err });
    }
};
exports.createTender = createTender;
const getTenders = async (_req, res) => {
    try {
        const tenders = await tenderModel_1.default.findAll();
        res.status(200).json(tenders);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to fetch tenders', error: err });
    }
};
exports.getTenders = getTenders;
