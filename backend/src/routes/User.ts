import express from "express";
import controller from "../controller/controller";

const router = express.Router();

router.post("/create", controller.createUser);
router.get("/get/:userId", controller.readUser);
router.get("/get", controller.readAllUser);
router.patch("/update/:userId", controller.updateUser);
router.delete("/delete/:userId", controller.deleteUser);

export default router;
