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
        required: true
    },
    dob: {
        type: Date,
        required: false
    }
}
);

AccountSchema.index({ email: 1 });
export default mongoose.model('Account', AccountSchema);