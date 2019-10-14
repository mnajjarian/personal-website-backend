import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema);

export default User;