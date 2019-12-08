import mongoose from "mongoose";
import { UserAccount, iUserAccount } from "../../../models/userAccount"


const UserAccountSchema = new mongoose.Schema({
    instagram: {
        type: String,
        required: true
    },

    followersCount: {
        type: Number,
        required: true
    },

    conversionRate: {
        type: Number,
        required: true
    },

    priceForPost: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    categories: {
        type: String,
        required: true
    },
});

UserAccountSchema.index({ email: 1 });
UserAccountSchema.loadClass(UserAccount);

export default mongoose.model<iUserAccount>('UserAccount', UserAccountSchema);