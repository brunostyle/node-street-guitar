"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _express = require("express");

var _jwtGenerator = _interopRequireDefault(require("../helpers/jwt-generator"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var req,
        res,
        _req$body,
        email,
        password,
        userFound,
        passwordMatch,
        token,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 3;
            _context.next = 6;
            return _User["default"].findOne({
              email: email
            });

          case 6:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'El email no coincide'
            }));

          case 9:
            if (userFound.state) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'El usuario no esta activo'
            }));

          case 11:
            _context.next = 13;
            return _User["default"].comparePassword(password, userFound.password);

          case 13:
            passwordMatch = _context.sent;

            if (passwordMatch) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'Contraseña incorrecta'
            }));

          case 16:
            _context.next = 18;
            return (0, _jwtGenerator["default"])(userFound._id);

          case 18:
            token = _context.sent;
            res.json({
              userFound: userFound,
              token: token
            });
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 22]]);
  }));

  return function login() {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;