import { Schema, Document, model } from 'mongoose';
import { UserModelIn } from '../interfaces/user';

export interface UserModel extends UserModelIn, Document {
    fullName(): string;
}

export const UserSchema: Schema = new Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    title: {
        type: String
    },
    bio: {
        type: String,
        trim: true
    },
    hash: {
        type: String
    },
    salt: {
        type: String
    }
});

UserSchema.methods.fullName = function(): string  {
    return (this.firstName.trim() + " " + this.lastName.trim());
}

const User = model<UserModel>('User', UserSchema);

export default User;