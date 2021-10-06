import Song from '../models/Song';
import Gender from '../models/Gender';
import Artist from '../models/Artist';
import { request, response } from 'express';

export const getSongs = async (req = request, res = response) => {
    const { limit = 5, skip = 0 } = req.query;   
    const querry = { state: true };
    try {
        const [ count, songs ] = await Promise.all([
            Song.countDocuments(querry),
            Song.find(querry)
                .limit(limit)
                .skip(skip)
                .populate('gender', 'name')
                .populate('artist', 'name')
                .populate('user', 'name')
        ]);
        res.json({ count, songs });
    } catch (error) {
        console.log(error);
    }
}

export const getSong = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id)
                               .populate('gender', 'name')
                               .populate('artist', 'name')
                               .populate('user', 'name');

        res.json(song);
    } catch (error) {
        console.log(error);
    }
}

export const postSong = async (req = request, res = response) => {
    const { name, gender, artist, year } = req.body;
    try {

        const genderFound = await Gender.findOne({ name: gender });
        const artistFound = await Artist.findOne({ name: artist });
        const song = new Song({ name, gender: genderFound._id, artist: artistFound._id, year, user: req.userAuth._id });
        const songSaved = await song.save();
        res.json(songSaved);
    } catch (error) {
        console.log(error);
    }
}

export const updateSong = async (req = request, res = response) => {
    const { id } = req.params;
    const { name, gender, artist, year } = req.body;
    try {
        let data = { name, gender, artist, year }
        if(gender){
            const genderFound = await Gender.findOne({ name: gender });
            data.gender = genderFound._id;
        }
        if(artist){
            const artistFound = await Artist.findOne({ name: artist });
            data.artist = artistFound._id;
        }
        const songUpdate = await Song.findByIdAndUpdate(id, data, { new: true });
        res.json(songUpdate);
    } catch (error) {
        console.log(error);
    }
}

export const deleteSong = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const songDeleted = await Song.findByIdAndUpdate(id, { state: false }, { new: true });
        res.json(songDeleted);
    } catch (error) {
        console.log(error);
    }
}