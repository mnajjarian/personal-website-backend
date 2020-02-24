import { Schema, Document, model } from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import { UserIn } from '../interfaces/user';

export interface UserModel extends UserIn, Document {
    fullName(): string;
}

export const UserSchema: Schema = new Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
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
    }
});

UserSchema.methods.fullName = function(): string  {
    return (this.firstName.trim() + " " + this.lastName.trim());
}

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email'});

const User = model<UserModel>('User', UserSchema);

export default User;