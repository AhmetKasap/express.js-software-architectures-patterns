import { inject, injectable } from "inversify";
import TYPES from "../inversify/types";
import { IUserService } from "./IUserService";
import { IUserRepository } from "../repositories/IUserRepository";
import { UserEntity } from "../entities/UserEntity";

@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) {}

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.findAll();
    }
}
