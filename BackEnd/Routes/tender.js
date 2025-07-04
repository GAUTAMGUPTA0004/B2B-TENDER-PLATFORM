"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tenderController_1 = require("../Controllers/tenderController");
const router = express_1.default.Router();
router.post('/', tenderController_1.createTender);
router.get('/', tenderController_1.getTenders);
exports.default = router;
