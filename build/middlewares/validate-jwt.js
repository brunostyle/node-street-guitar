"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validateJWT = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var req,
        res,
        next,
        token,
        _jwt$verify,
        id,
        user,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            next = _args.length > 2 ? _args[2] : undefined;
            token = req.header('access-token');

            if (token) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'No has enviado el token de acceso'
            }));

          case 6:
            _context.prev = 6;
            _jwt$verify = _jsonwebtoken["default"].verify(token, process.env.SECRET_WORD), id = _jwt$verify.id;
            _context.next = 10;
            return _User["default"].findById(id);

          case 10:
            user = _context.sent;

            if (user) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'El usuario no existe en la base de datos'
            }));

          case 13:
            if (user.state) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'Token no valido'
            }));

          case 15:
            req.userAuth = user;
            next();
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](6);
            console.log(_context.t0);
            res.status(401).json({
              msg: 'Token no valido'
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 19]]);
  }));

  return function validateJWT() {
    return _ref.apply(this, arguments);
  };
}();

var _default = validateJWT;
exports["default"] = _default;