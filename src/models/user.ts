import { Schema, Document, Model, model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as passportLocalMongoose from 'passport-local-mongoose';
import { IUser } from '../interfaces/user';

export interface IUserModel extends IUser, Document {
    fullName(): string;
}

export const UserSchema: Schema = new Schema({
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
    avatar: {
        type: String
    },
    about: {
        type: String,
        trim: true
    }
});

UserSchema.methods.fullName = function(): string  {
    return (this.firstName.trim() + " " + this.lastName.trim());
}

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email'});

const User = model<IUserModel>('User', UserSchema);

export default User;