import Artist from '../models/Artist';
import { request, response } from 'express';

export const getArtists = async (req = request, res = response) => {
    const { limit = 5, skip = 0 } = req.query;   
    const querry = { state: true };
    try {
        const [ count, artists ] = await Promise.all([ 
            Artist.countDocuments(querry),
            Artist.find(querry)
                .limit(limit)
                .skip(skip)
        ]);
        res.json({ count, artists });
    } catch (error) {
        console.log(error);
    }
}

export const getArtist = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const artist = await Artist.findById(id);
        res.json(artist);
    } catch (error) {
        console.log(error);
    }
}

export const postArtist = async (req = request, res = response) => {
    const { name } = req.body;
    try {
        const artist = new Artist({ name });
        const artistSaved = await artist.save();
        res.json(artistSaved);
    } catch (error) {
        console.log(error);
    }
}

export const updateArtist = async (req = request, res = response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const artistUpdate = await Artist.findByIdAndUpdate(id, { name }, { new: true });
        res.json(artistUpdate);
    } catch (error) {
        console.log(error);
    }
}

export const deleteArtist = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const artistDeleted = await Artist.findByIdAndUpdate(id, { state: false }, { new: true });
        res.json(artistDeleted);
    } catch (error) {
        console.log(error);
    }
}