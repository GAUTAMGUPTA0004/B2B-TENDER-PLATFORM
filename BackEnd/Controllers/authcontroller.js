"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../Models/userModel"));
const SECRET = process.env.JWT_SECRET;
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await userModel_1.default.findOne({ where: { email } });
        if (userExists)
            return res.status(400).json({ message: 'User already exists' });
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const token = jsonwebtoken_1.default.sign({ id: userModel_1.default.id }, SECRET, { expiresIn: '1d' });
        return res.status(201).json({ token });
    }
    catch (err) {
        return res.status(500).json({ message: 'Registration failed', error: err });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel_1.default.findOne({ where: { email } });
        if (!user)
            return res.status(400).json({ message: 'Invalid credentials' });
        const match = await bcryptjs_1.default.compare(password, user.password);
        if (!match)
            return res.status(400).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ id: user.id }, SECRET, { expiresIn: '1d' });
        return res.status(200).json({ token });
    }
    catch (err) {
        return res.status(500).json({ message: 'Login failed', error: err });
    }
};
exports.login = login;
