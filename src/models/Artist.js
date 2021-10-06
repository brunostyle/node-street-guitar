import { Schema, model } from 'mongoose';

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    state: {
        type: Boolean,
        default: true
    }
}, { versionKey: false});

export default model('Artist', artistSchema);