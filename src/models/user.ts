import crypto from "crypto";
import mongoose from "mongoose";

interface iUser extends mongoose.Document {
    id: string;
    name: string;
    avatar: string;
    email?: string;
    password: string;
    gender: gender;
    dob: Date,
    whatsapp: string;
    instagram: string;
    followersCount: number;
    conversionRate: number;
    priceForPost: number;
    location: string;
    categories: Category[];
    countryCode: string,
    authProvider?: authProvider
    authToken: string,
    authRefreshToken: string;
}

export enum authProvider {
    facebook,
    google,
    local
}

export enum gender {
    male,
    female,
    other
}

class User {
    _user: iUser;
    [k: string]: any;
    constructor(user: iUser) {
        this._user = user;
    }
    get id() {
        return this._user.id;
     }
    set authToken(value: string) {
        this._user.authToken = value;
    }
}

export { iUser, User };