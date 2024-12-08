import { injectable } from "inversify";
import { getRepository } from "typeorm";
import { IUserRepository } from "../IUserRepository";
import { User } from "../../models/postgres/user.postgres.model";
import { UserEntity } from "../../entities/UserEntity";

@injectable()
export class PostgresUserRepository implements IUserRepository {
    private userRepository = getRepository(User);

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findById(id: string): Promise<UserEntity | null> {
        return this.userRepository.findOne(id);
    }

    async create(user: UserEntity): Promise<UserEntity> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async update(id: string, user: UserEntity): Promise<UserEntity | null> {
        await this.userRepository.update(id, user);
        return this.findById(id);
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.userRepository.delete(id);
        return result.affected > 0;
    }
}
