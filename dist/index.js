"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./config");
const counts_routes_1 = __importDefault(require("./routes/counts.routes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Health Check Ok' });
});
app.use('/counts', counts_routes_1.default);
const server = http_1.default.createServer(app);
server.listen(config_1.port, () => {
    console.log(`Server is running on port ${config_1.port}`);
});
exports.default = app;
