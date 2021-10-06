import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
}, { versionKey: false });

userSchema.statics.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

userSchema.statics.comparePassword = async (receivedPassword, password) => {
    return bcrypt.compareSync(receivedPassword, password);
}

userSchema.methods.toJSON = function(){
    const { password, ...user } = this.toObject();
    return user;
}

export default model('User', userSchema);
