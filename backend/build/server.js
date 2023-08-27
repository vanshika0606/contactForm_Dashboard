"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const User_1 = __importDefault(require("./routes/User"));
const router = (0, express_1.default)();
// console.log("server");
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    console.log("connected to mongodb");
})
    .catch((error) => {
    console.log(error);
});
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
router.use('/api', User_1.default);
// router.get('/ping', (req, res, next)=>{
//     console.log("pong");
// })
// console.log(config.server.port);
http_1.default.createServer(router).listen(config_1.config.server.port), () => {
    console.log(`server is running on port ${config_1.config.server.port}`);
};
