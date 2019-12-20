import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
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
        required: false
    },
    authProvider: {
        type: String,
        required: true
    },
    authToken: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    }
}
);

AccountSchema.index({ email: 1 });
export default mongoose.model('Account', AccountSchema);