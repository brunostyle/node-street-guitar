import User from '../models/User';
import Song from '../models/Song';
import Gender from '../models/Gender';
import Artist from '../models/Artist';

//USERS
export const existUser = async (id) => {
    const exist = await User.findById(id);
    if(!exist) throw new Error('El usuario no existe');
    if(!exist.state) throw new Error('El usuario se ha eliminado');
}

export const emailUserExist = async (email) => {
    const exist = await User.findOne({email});
    if(exist) throw new Error('El email ya existe');
}

//SONGS
export const existSong = async (id) => {
    const exist = await Song.findById(id);
    if(!exist) throw new Error('La cancion no existe');
    if(!exist.state) throw new Error('La cancion se ha eliminado');
}

//GENDERS
export const existGender = async (id) => {
    const exist = await Gender.findById(id);
    if(!exist) throw new Error('El genero no existe');
    if(!exist.state) throw new Error('El genero se ha eliminado');
}

export const existGenderByName = async (name) => {
    const exist = await Gender.findOne({name});
    if(!exist) throw new Error('El genero no existe');
}

export const nameGenderExist = async (name) => {
    const exist = await Gender.findOne({name});
    if(exist) throw new Error('El genero ya existe');
}

//ARTISTS
export const existArtist = async (id) => {
    const exist = await Artist.findById(id);
    if(!exist) throw new Error('El artista no existe');
    if(!exist.state) throw new Error('El artista se ha eliminado');
}

export const existArtistByName = async (name) => {
    const exist = await Artist.findOne({name});
    if(!exist) throw new Error('El artista no existe');
}

export const nameArtistExist = async (name) => {
    const exist = await Artist.findOne({name});
    if(exist) throw new Error('El artista ya existe');
}