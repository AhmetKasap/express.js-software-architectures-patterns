import { Router } from "express";
import container from "../inversify/container";
import TYPES from "../inversify/types";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = container.get<UserController>(TYPES.UserController);

router.get("/", (req, res) => userController.getAllUsers(req, res));

router.post('/', )

export default router;
