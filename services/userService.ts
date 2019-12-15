import { UserRepository } from "../database/UserRepository";
import { TYPES } from "../inversify.types";
import { inject, injectable } from "inversify";
import { iUser } from "../models/user";

@injectable()
export class UserService {
    @inject(TYPES.UserRepository)
    private _userRepository!: UserRepository;

    findByEmail(email: string) {
        return this._userRepository.findOne({'mail': email});
    }
    getUser(id: any) {
        return this._userRepository.findOne(id);
    }
    createUser(user: iUser) {
        return this._userRepository.create(user);
    }
    getAllUsers() {
        return this._userRepository.find({});
    }
}