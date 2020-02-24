import { Schema, Document, model } from 'mongoose';

export interface ProfileModel extends Document {
    name: string;
    image: string;
    title: string;
    biography: string;
}

const ProfileSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    biography: {
        type: String,
    },
})
const Profile = model<ProfileModel>('Profile', ProfileSchema);

export default Profile;