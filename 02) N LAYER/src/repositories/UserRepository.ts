import { injectable } from "inversify";
import { User } from "../models/User";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export class UserRepository implements IUserRepository {
    async findAll(): Promise<any[]> {
        return User.find();
    }
}
