import { inject, injectable } from "inversify";
import TYPES from "../inversify/types";
import { IUserService } from "../services/IUserService";
import { Request, Response } from "express";

@injectable()
export class UserController {
    constructor(@inject(TYPES.UserService) private userService: IUserService) {}

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json("error");
        }
    }
}
