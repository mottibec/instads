import mongoose from "mongoose";
import { User } from "../../../models/user"


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    whatsapp: {
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
    }

}
);

UserSchema.index({ email: 1 });
UserSchema.loadClass(User);

export default mongoose.model('User', UserSchema);