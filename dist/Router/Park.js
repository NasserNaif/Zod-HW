"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const parkSchema_1 = require("../zodSchema/parkSchema");
exports.parkRouter = (0, express_1.default)();
let rideArr = [];
rideArr.push({
    id: "234",
    name: "water trip",
    type: "water",
    tickets: 7,
    price: 170,
});
exports.parkRouter.get(`/`, (req, res) => {
    return res.json(rideArr);
});
exports.parkRouter.post(`/`, (0, validate_1.default)(parkSchema_1.parkSchema), (req, res) => {
    const newRide = req.body;
    rideArr.push(newRide);
    return res.json({
        message: "item added !",
    });
});
exports.parkRouter.put(`/:id`, (0, validate_1.default)(parkSchema_1.parkSchema), (req, res) => {
    const { id } = req.params;
    const updateObj = req.body;
    rideArr.map((upd) => {
        if (upd.id === id || upd.name === id) {
            upd.id = updateObj.id;
            upd.name = updateObj.name;
            upd.type = updateObj.type;
            upd.tickets = updateObj.tickets;
            upd.price = updateObj.price;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
exports.parkRouter.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const newRideArr = rideArr.filter((del) => {
        return del.id !== id;
    });
    rideArr = newRideArr;
    return res.json({
        message: "item deleted !",
    });
});
