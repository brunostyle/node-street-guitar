import Gender from '../models/Gender';
import { request, response } from 'express'

export const getGenders = async (req = request, res = response) => {
    const { limit = 5, skip = 0 } = req.query;   
    const querry = { state: true };
    try {
        const [ count, genders ] = await Promise.all([ 
            Gender.countDocuments(querry),
            Gender.find(querry)
                .limit(limit)
                .skip(skip)
        ]);
        res.json({ count, genders });
    } catch (error) {
        console.log(error);
    }
}

export const getGender = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const gender = await Gender.findById(id);
        res.json(gender);
    } catch (error) {
        console.log(error);
    }
}

export const postGender = async (req = request, res = response) => {
    const { name } = req.body;
    try {
        const gender = new Gender({ name });
        const genderSaved = await gender.save();
        res.json(genderSaved);
    } catch (error) {
        console.log(error);
    }
}

export const updateGender = async (req = request, res = response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const genderUpdate = await Gender.findByIdAndUpdate(id, { name }, { new: true });
        res.json(genderUpdate);
    } catch (error) {
        console.log(error);
    }
}

export const deleteGender = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const genderDeleted = await Gender.findByIdAndUpdate(id, { state: false }, { new: true });
        res.json(genderDeleted);
    } catch (error) {
        console.log(error);
    }
}