import mongoose from "mongoose";

export interface iUserAccount extends mongoose.Document {
    id: string;
    email: string;
    whatsapp: string;
    instagram: string;
    followersCount: number;
    conversionRate: number;
    priceForPost: number;
    location: string;
    categories: Category[];
}

export class UserAccount {
    _userAccount: iUserAccount;
    constructor(userAccount: iUserAccount) {
        this._userAccount = userAccount;

    }
}