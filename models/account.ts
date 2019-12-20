import mongoose from "mongoose";

interface iAccount extends mongoose.Document {
    name: string;
    avatar: string;
    email?: string;
    password?: string;
    gender: gender;
    dob: Date,
    authProvider: authProvider
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


export { iAccount };