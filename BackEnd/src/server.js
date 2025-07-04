"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const db_1 = __importDefault(require("../utils/db"));
const PORT = process.env.PORT || 5000;
(async () => {
    try {
        await db_1.default.authenticate();
        console.log('✅ PostgreSQL connected successfully.');
        await db_1.default.sync(); // Or use { force: true } for development only
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
    catch (err) {
        console.error('❌ Unable to connect to the database:', err);
    }
})();
