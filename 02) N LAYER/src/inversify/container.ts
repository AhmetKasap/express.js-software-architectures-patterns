import { Container } from "inversify";
import TYPES from "./types";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { MongoUserRepository } from "../repositories/mongo/MongoUserRepository";
import { PostgresUserRepository } from "../repositories/postgres/PostgresUserRepository";
import { IUserService } from "../services/IUserService";
import { IUserRepository } from "../repositories/IUserRepository";

const container = new Container();


container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<IUserRepository>(TYPES.UserRepository).to(MongoUserRepository);

//container.bind<IUserRepository>(TYPES.UserRepository).to(PostgresUserRepository);


export default container;
