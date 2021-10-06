import User from '../models/User';
import { request, response } from 'express';

export const getUsers = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const querry = { state: true };
    try {
        const [ count, users ] = await Promise.all([
            User.countDocuments(querry),
            User.find(querry)
                .limit(limit)
                .skip(from)
        ]);
        res.json({ count, users });
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

export const postUser = async (req = request, res = response) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password: await User.encryptPassword(password) });
        const userSaved = await user.save();
        res.json(userSaved);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, password, ...rest} = req.body;
    try {
        if(password){
            rest.password = await User.encryptPassword(password);
        }
        const userUpdate = await User.findByIdAndUpdate(id, rest, { new: true });
        res.json(userUpdate);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const userDeleted = await User.findByIdAndUpdate(id, { state: false }, { new: true });
        res.json(userDeleted);
    } catch (error) {
        console.log(error);
    }
}