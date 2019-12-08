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
    account: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserAccount"
        }

    }
}
);

UserSchema.index({ email: 1 });
UserSchema.loadClass(User);

export default mongoose.model('User', UserSchema);