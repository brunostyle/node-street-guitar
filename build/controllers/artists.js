"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArtist = exports.updateArtist = exports.postArtist = exports.getArtist = exports.getArtists = void 0;

var _Artist = _interopRequireDefault(require("../models/Artist"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getArtists = async (req = _express.request, res = _express.response) => {
  const {
    limit = 5,
    skip = 0
  } = req.query;
  const querry = {
    state: true
  };

  try {
    const [count, artists] = await Promise.all([_Artist.default.countDocuments(querry), _Artist.default.find(querry).limit(limit).skip(skip)]);
    res.json({
      count,
      artists
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getArtists = getArtists;

const getArtist = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const artist = await _Artist.default.findById(id);
    res.json(artist);
  } catch (error) {
    console.log(error);
  }
};

exports.getArtist = getArtist;

const postArtist = async (req = _express.request, res = _express.response) => {
  const {
    name
  } = req.body;

  try {
    const artist = new _Artist.default({
      name
    });
    const artistSaved = await artist.save();
    res.json(artistSaved);
  } catch (error) {
    console.log(error);
  }
};

exports.postArtist = postArtist;

const updateArtist = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;
  const {
    name
  } = req.body;

  try {
    const artistUpdate = await _Artist.default.findByIdAndUpdate(id, {
      name
    }, {
      new: true
    });
    res.json(artistUpdate);
  } catch (error) {
    console.log(error);
  }
};

exports.updateArtist = updateArtist;

const deleteArtist = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const artistDeleted = await _Artist.default.findByIdAndUpdate(id, {
      state: false
    }, {
      new: true
    });
    res.json(artistDeleted);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteArtist = deleteArtist;