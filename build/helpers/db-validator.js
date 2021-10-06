"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameArtistExist = exports.existArtistByName = exports.existArtist = exports.nameGenderExist = exports.existGenderByName = exports.existGender = exports.existSong = exports.emailUserExist = exports.existUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Song = _interopRequireDefault(require("../models/Song"));

var _Gender = _interopRequireDefault(require("../models/Gender"));

var _Artist = _interopRequireDefault(require("../models/Artist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//USERS
var existUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var exist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findById(id);

          case 2:
            exist = _context.sent;

            if (exist) {
              _context.next = 5;
              break;
            }

            throw new Error('El usuario no existe');

          case 5:
            if (exist.state) {
              _context.next = 7;
              break;
            }

            throw new Error('El usuario se ha eliminado');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function existUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.existUser = existUser;

var emailUserExist = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email) {
    var exist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: email
            });

          case 2:
            exist = _context2.sent;

            if (!exist) {
              _context2.next = 5;
              break;
            }

            throw new Error('El email ya existe');

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function emailUserExist(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //SONGS


exports.emailUserExist = emailUserExist;

var existSong = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var exist;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Song["default"].findById(id);

          case 2:
            exist = _context3.sent;

            if (exist) {
              _context3.next = 5;
              break;
            }

            throw new Error('La cancion no existe');

          case 5:
            if (exist.state) {
              _context3.next = 7;
              break;
            }

            throw new Error('La cancion se ha eliminado');

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function existSong(_x3) {
    return _ref3.apply(this, arguments);
  };
}(); //GENDERS


exports.existSong = existSong;

var existGender = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    var exist;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Gender["default"].findById(id);

          case 2:
            exist = _context4.sent;

            if (exist) {
              _context4.next = 5;
              break;
            }

            throw new Error('El genero no existe');

          case 5:
            if (exist.state) {
              _context4.next = 7;
              break;
            }

            throw new Error('El genero se ha eliminado');

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function existGender(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.existGender = existGender;

var existGenderByName = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(name) {
    var exist;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Gender["default"].findOne({
              name: name
            });

          case 2:
            exist = _context5.sent;

            if (exist) {
              _context5.next = 5;
              break;
            }

            throw new Error('El genero no existe');

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function existGenderByName(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.existGenderByName = existGenderByName;

var nameGenderExist = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name) {
    var exist;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Gender["default"].findOne({
              name: name
            });

          case 2:
            exist = _context6.sent;

            if (!exist) {
              _context6.next = 5;
              break;
            }

            throw new Error('El genero ya existe');

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function nameGenderExist(_x6) {
    return _ref6.apply(this, arguments);
  };
}(); //ARTISTS


exports.nameGenderExist = nameGenderExist;

var existArtist = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
    var exist;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Artist["default"].findById(id);

          case 2:
            exist = _context7.sent;

            if (exist) {
              _context7.next = 5;
              break;
            }

            throw new Error('El artista no existe');

          case 5:
            if (exist.state) {
              _context7.next = 7;
              break;
            }

            throw new Error('El artista se ha eliminado');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function existArtist(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.existArtist = existArtist;

var existArtistByName = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(name) {
    var exist;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Artist["default"].findOne({
              name: name
            });

          case 2:
            exist = _context8.sent;

            if (exist) {
              _context8.next = 5;
              break;
            }

            throw new Error('El artista no existe');

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function existArtistByName(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

exports.existArtistByName = existArtistByName;

var nameArtistExist = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(name) {
    var exist;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _Artist["default"].findOne({
              name: name
            });

          case 2:
            exist = _context9.sent;

            if (!exist) {
              _context9.next = 5;
              break;
            }

            throw new Error('El artista ya existe');

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function nameArtistExist(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

exports.nameArtistExist = nameArtistExist;