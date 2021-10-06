"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.postSong = exports.getSong = exports.getSongs = void 0;

var _Song = _interopRequireDefault(require("../models/Song"));

var _Gender = _interopRequireDefault(require("../models/Gender"));

var _Artist = _interopRequireDefault(require("../models/Artist"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getSongs = async (req = _express.request, res = _express.response) => {
  const {
    limit = 5,
    skip = 0
  } = req.query;
  const querry = {
    state: true
  };

  try {
    const [count, songs] = await Promise.all([_Song.default.countDocuments(querry), _Song.default.find(querry).limit(limit).skip(skip).populate('gender', 'name').populate('artist', 'name').populate('user', 'name')]);
    res.json({
      count,
      songs
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getSongs = getSongs;

const getSong = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const song = await _Song.default.findById(id).populate('gender', 'name').populate('artist', 'name').populate('user', 'name');
    res.json(song);
  } catch (error) {
    console.log(error);
  }
};

exports.getSong = getSong;

const postSong = async (req = _express.request, res = _express.response) => {
  const {
    name,
    gender,
    artist,
    year
  } = req.body;

  try {
    const genderFound = await _Gender.default.findOne({
      name: gender
    });
    const artistFound = await _Artist.default.findOne({
      name: artist
    });
    const song = new _Song.default({
      name,
      gender: genderFound._id,
      artist: artistFound._id,
      year,
      user: req.userAuth._id
    });
    const songSaved = await song.save();
    res.json(songSaved);
  } catch (error) {
    console.log(error);
  }
};

exports.postSong = postSong;

const updateSong = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;
  const {
    name,
    gender,
    artist,
    year
  } = req.body;

  try {
    let data = {
      name,
      gender,
      artist,
      year
    };

    if (gender) {
      const genderFound = await _Gender.default.findOne({
        name: gender
      });
      data.gender = genderFound._id;
    }

    if (artist) {
      const artistFound = await _Artist.default.findOne({
        name: artist
      });
      data.artist = artistFound._id;
    }

    const songUpdate = await _Song.default.findByIdAndUpdate(id, data, {
      new: true
    });
    res.json(songUpdate);
  } catch (error) {
    console.log(error);
  }
};

exports.updateSong = updateSong;

const deleteSong = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const songDeleted = await _Song.default.findByIdAndUpdate(id, {
      state: false
    }, {
      new: true
    });
    res.json(songDeleted);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSong = deleteSong;