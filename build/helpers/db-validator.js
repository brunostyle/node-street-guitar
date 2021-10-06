"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameArtistExist = exports.existArtistByName = exports.existArtist = exports.nameGenderExist = exports.existGenderByName = exports.existGender = exports.existSong = exports.emailUserExist = exports.existUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Song = _interopRequireDefault(require("../models/Song"));

var _Gender = _interopRequireDefault(require("../models/Gender"));

var _Artist = _interopRequireDefault(require("../models/Artist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//USERS
const existUser = async id => {
  const exist = await _User.default.findById(id);
  if (!exist) throw new Error('El usuario no existe');
  if (!exist.state) throw new Error('El usuario se ha eliminado');
};

exports.existUser = existUser;

const emailUserExist = async email => {
  const exist = await _User.default.findOne({
    email
  });
  if (exist) throw new Error('El email ya existe');
}; //SONGS


exports.emailUserExist = emailUserExist;

const existSong = async id => {
  const exist = await _Song.default.findById(id);
  if (!exist) throw new Error('La cancion no existe');
  if (!exist.state) throw new Error('La cancion se ha eliminado');
}; //GENDERS


exports.existSong = existSong;

const existGender = async id => {
  const exist = await _Gender.default.findById(id);
  if (!exist) throw new Error('El genero no existe');
  if (!exist.state) throw new Error('El genero se ha eliminado');
};

exports.existGender = existGender;

const existGenderByName = async name => {
  const exist = await _Gender.default.findOne({
    name
  });
  if (!exist) throw new Error('El genero no existe');
};

exports.existGenderByName = existGenderByName;

const nameGenderExist = async name => {
  const exist = await _Gender.default.findOne({
    name
  });
  if (exist) throw new Error('El genero ya existe');
}; //ARTISTS


exports.nameGenderExist = nameGenderExist;

const existArtist = async id => {
  const exist = await _Artist.default.findById(id);
  if (!exist) throw new Error('El artista no existe');
  if (!exist.state) throw new Error('El artista se ha eliminado');
};

exports.existArtist = existArtist;

const existArtistByName = async name => {
  const exist = await _Artist.default.findOne({
    name
  });
  if (!exist) throw new Error('El artista no existe');
};

exports.existArtistByName = existArtistByName;

const nameArtistExist = async name => {
  const exist = await _Artist.default.findOne({
    name
  });
  if (exist) throw new Error('El artista ya existe');
};

exports.nameArtistExist = nameArtistExist;