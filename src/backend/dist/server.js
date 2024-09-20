"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3450;
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/save", (req, res) => {
    res.send("getting saved data...");
    console.info("getting saved data...");
});
app.post("/", (req, res) => {
    res.send("hello world");
    console.info("getting saved data...");
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT} \n http://localhost:${PORT}`);
});
