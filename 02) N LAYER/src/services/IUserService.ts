import { UserEntity } from "../entities/UserEntity";

export interface IUserService {
    getAllUsers(): Promise<UserEntity[]>;
}
