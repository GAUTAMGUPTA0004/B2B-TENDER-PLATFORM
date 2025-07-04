"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Route imports
const auth_1 = __importDefault(require("../Routes/auth"));
const company_1 = __importDefault(require("../Routes/company"));
const tender_1 = __importDefault(require("../Routes/tender"));
const application_1 = __importDefault(require("../Routes/application"));
const search_1 = __importDefault(require("../Routes/search"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Mount routes
app.use('/api/auth', auth_1.default);
app.use('/api/company', company_1.default);
app.use('/api/tender', tender_1.default);
app.use('/api/application', application_1.default);
app.use('/api/search', search_1.default);
app.get('/', (_req, res) => {
    res.send('API is running...');
});
exports.default = app;
