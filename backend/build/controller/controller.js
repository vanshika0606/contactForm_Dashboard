"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../models/User"));
const createUser = (req, res, next) => {
    // console.log(req.body);
    const { firstName, lastName, status } = req.body;
    const user = new User_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        firstName,
        lastName,
        status,
    });
    return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({
        error,
    }));
};
const readUser = (req, res, next) => {
    const userId = req.params.userId;
    return User_1.default.findById(userId)
        .then((user) => {
        user
            ? res.status(200).json({
                user,
            })
            : res.status(404).json({
                message: "Not Found",
            });
    })
        .catch((error) => {
        res.status(500).json({ error });
    });
};
const readAllUser = (req, res, next) => {
    return User_1.default.find()
        .then((users) => {
        res.status(200).json({
            users,
        });
    })
        .catch((error) => {
        res.status(500).json({ error });
    });
};
const updateUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    return User_1.default.findById(userId)
        .then((user) => {
        if (user) {
            user.set(req.body);
            return user
                .save()
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({
                error,
            }));
        }
        else {
            res.status(404).json({
                message: "Not Found",
            });
        }
    })
        .catch((error) => {
        res.status(500).json({ error });
    });
};
const deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    return User_1.default.findByIdAndDelete(userId).then((user) => user
        ? res.status(200).json({
            message: "Deleted",
        })
        : res.status(404).json({
            message: "Not found",
        }));
};
exports.default = { createUser, readUser, readAllUser, updateUser, deleteUser };
