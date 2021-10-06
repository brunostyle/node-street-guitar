"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateJWT = async (req = _express.request, res = _express.response, next) => {
  const token = req.header('access-token');
  if (!token) return res.status(400).json({
    msg: 'No has enviado el token de acceso'
  });

  try {
    const {
      id
    } = _jsonwebtoken.default.verify(token, process.env.SECRET_WORD);

    const user = await _User.default.findById(id);
    if (!user) return res.status(400).json({
      msg: 'El usuario no existe en la base de datos'
    });
    if (!user.state) return res.status(400).json({
      msg: 'Token no valido'
    });
    req.userAuth = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no valido'
    });
  }
};

var _default = validateJWT;
exports.default = _default;