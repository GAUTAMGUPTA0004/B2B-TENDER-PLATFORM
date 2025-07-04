"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationController_1 = require("../Controllers/applicationController");
const router = express_1.default.Router();
router.post('/', applicationController_1.applyTender);
router.get('/:id', applicationController_1.getApplicationsByTender);
exports.default = router;
