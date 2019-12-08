import crypto from "crypto";

interface iUser {
    id: string;
    name: string;
    avatar: string;
    phone?: string;
    email?: string;
    password?: string;
    gender: gender;
    dob: Date,
    account: UserAccount;
    countryCode: string,
    authProvider?: authProvider
    authToken: string,
    authRefreshToken: string;
}
enum authProvider {
    facebook,
    google,
    local
}

enum gender {
    male,
    female,
    other
}

class User implements iUser {
    account!: UserAccount;
    authProvider!: authProvider;
    authToken!: string;
    authRefreshToken!: string;
    password!: string;
    dob!: Date;
    countryCode!: string;
    mainCurrencyCode!: string;
    id: string;
    name: string;
    avatar!: string;
    phone!: string;
    email: string;
    rating!: number;
    gender!: gender;

    [k: string]: any;

    constructor(name: string, email: string, id?: string) {
        this.name = name;
        this.email = email;
        this.id = id || crypto.randomBytes(16).toString("hex");
    }
}

export { iUser, User };