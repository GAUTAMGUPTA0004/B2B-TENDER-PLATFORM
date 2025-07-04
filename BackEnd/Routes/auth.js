"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontroller_1 = require("../Controllers/authcontroller");
const router = express_1.default.Router();
router.post('/register', authcontroller_1.register);
router.post('/login', authcontroller_1.login);
exports.default = router;
