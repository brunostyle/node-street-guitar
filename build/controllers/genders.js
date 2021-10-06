"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteGender = exports.updateGender = exports.postGender = exports.getGender = exports.getGenders = void 0;

var _Gender = _interopRequireDefault(require("../models/Gender"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getGenders = async (req = _express.request, res = _express.response) => {
  const {
    limit = 5,
    skip = 0
  } = req.query;
  const querry = {
    state: true
  };

  try {
    const [count, genders] = await Promise.all([_Gender.default.countDocuments(querry), _Gender.default.find(querry).limit(limit).skip(skip)]);
    res.json({
      count,
      genders
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getGenders = getGenders;

const getGender = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const gender = await _Gender.default.findById(id);
    res.json(gender);
  } catch (error) {
    console.log(error);
  }
};

exports.getGender = getGender;

const postGender = async (req = _express.request, res = _express.response) => {
  const {
    name
  } = req.body;

  try {
    const gender = new _Gender.default({
      name
    });
    const genderSaved = await gender.save();
    res.json(genderSaved);
  } catch (error) {
    console.log(error);
  }
};

exports.postGender = postGender;

const updateGender = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;
  const {
    name
  } = req.body;

  try {
    const genderUpdate = await _Gender.default.findByIdAndUpdate(id, {
      name
    }, {
      new: true
    });
    res.json(genderUpdate);
  } catch (error) {
    console.log(error);
  }
};

exports.updateGender = updateGender;

const deleteGender = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const genderDeleted = await _Gender.default.findByIdAndUpdate(id, {
      state: false
    }, {
      new: true
    });
    res.json(genderDeleted);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteGender = deleteGender;