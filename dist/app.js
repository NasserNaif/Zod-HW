"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Park_1 = require("./Router/Park");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(`/park`, Park_1.parkRouter);
app.listen(5300);
