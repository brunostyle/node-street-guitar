"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _express = require("express");

var _jwtGenerator = _interopRequireDefault(require("../helpers/jwt-generator"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const login = async (req = _express.request, res = _express.response) => {
  const {
    email,
    password
  } = req.body;

  try {
    const userFound = await _User.default.findOne({
      email
    });
    if (!userFound) return res.status(400).json({
      msg: 'El email no coincide'
    });
    if (!userFound.state) return res.status(400).json({
      msg: 'El usuario no esta activo'
    });
    const passwordMatch = await _User.default.comparePassword(password, userFound.password);
    if (!passwordMatch) return res.status(400).json({
      msg: 'Contraseña incorrecta'
    });
    const token = await (0, _jwtGenerator.default)(userFound._id);
    res.json({
      userFound,
      token
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = login;