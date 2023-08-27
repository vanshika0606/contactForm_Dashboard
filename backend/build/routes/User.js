"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller/controller"));
const router = express_1.default.Router();
router.post("/create", controller_1.default.createUser);
router.get("/get/:userId", controller_1.default.readUser);
router.get("/get", controller_1.default.readAllUser);
router.patch("/update/:userId", controller_1.default.updateUser);
router.delete("/delete/:userId", controller_1.default.deleteUser);
exports.default = router;
