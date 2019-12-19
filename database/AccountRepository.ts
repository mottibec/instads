import AccountSchema from "../database/models/mongoose/account"
import { iAccount } from "../models/account";
import { injectable } from "inversify";
import { MongoRepository } from "./mongoRepository";

@injectable()
export class AccountRepository extends MongoRepository<iAccount> {
  constructor() {
    super(AccountSchema);
  }
}