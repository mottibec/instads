import mongoose from "mongoose";

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
        required: false
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
        required: false
    },
    followersCount: {
        type: Number,
        required: true
    },
    topPost: {
        type: String,
        required: true
    },
    conversionRate: {
        type: Number,
        required: false
    },
    priceForPost: {
        type: Number,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    categories: {
        type: [String]
    }
}
);

UserSchema.index({ email: 1 });
export default mongoose.model('User', UserSchema);