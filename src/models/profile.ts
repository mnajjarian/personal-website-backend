import { Schema, Document, model } from 'mongoose';

export interface IProfileModel extends Document {
    name: string;
    image: string;
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
const Profile = model<IProfileModel>('Profile', ProfileSchema);

export default Profile;