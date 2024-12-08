import { injectable } from "inversify";
import { IUserRepository } from "../IUserRepository";
import { UserEntity } from "../../entities/UserEntity";
import { UserModel } from "../../models/mongo/user.mongo.model";

@injectable()
export class MongoUserRepository implements IUserRepository {
    async findAll(): Promise<UserEntity[]> {
        return UserModel.find();
    }

    async findById(id: string): Promise<UserEntity | null> {
        return UserModel.findById(id);
    }

    async create(user: UserEntity): Promise<UserEntity> {
        return UserModel.create(user);
    }

    async update(id: string, user: UserEntity): Promise<UserEntity | null> {
        return UserModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        const result = await UserModel.findByIdAndDelete(id);
        return !!result;
    }
}
