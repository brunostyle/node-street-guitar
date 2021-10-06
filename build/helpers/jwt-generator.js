"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateJWT = id => {
  return new Promise((resolve, reject) => {
    _jsonwebtoken.default.sign({
      id
    }, process.env.SECRET_WORD, {
      expiresIn: '6h'
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token');
      } else {
        resolve(token);
      }
    });
  });
};

var _default = generateJWT;
exports.default = _default;