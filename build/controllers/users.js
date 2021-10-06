"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUsers = async (req = _express.request, res = _express.response) => {
  const {
    limit = 5,
    from = 0
  } = req.query;
  const querry = {
    state: true
  };

  try {
    const [count, users] = await Promise.all([_User.default.countDocuments(querry), _User.default.find(querry).limit(limit).skip(from)]);
    res.json({
      count,
      users
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = getUsers;

const getUser = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const user = await _User.default.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = getUser;

const postUser = async (req = _express.request, res = _express.response) => {
  const {
    name,
    email,
    password
  } = req.body;

  try {
    const user = new _User.default({
      name,
      email,
      password: await _User.default.encryptPassword(password)
    });
    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

exports.postUser = postUser;

const updateUser = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;
  const {
    _id,
    password,
    ...rest
  } = req.body;

  try {
    if (password) {
      rest.password = await _User.default.encryptPassword(password);
    }

    const userUpdate = await _User.default.findByIdAndUpdate(id, rest, {
      new: true
    });
    res.json(userUpdate);
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = updateUser;

const deleteUser = async (req = _express.request, res = _express.response) => {
  const {
    id
  } = req.params;

  try {
    const userDeleted = await _User.default.findByIdAndUpdate(id, {
      state: false
    }, {
      new: true
    });
    res.json(userDeleted);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = deleteUser;