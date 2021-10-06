"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.postSong = exports.getSong = exports.getSongs = void 0;

var _Song = _interopRequireDefault(require("../models/Song"));

var _Gender = _interopRequireDefault(require("../models/Gender"));

var _Artist = _interopRequireDefault(require("../models/Artist"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSongs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var req,
        res,
        _req$query,
        _req$query$limit,
        limit,
        _req$query$skip,
        skip,
        querry,
        _yield$Promise$all,
        _yield$Promise$all2,
        count,
        songs,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _req$query = req.query, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 5 : _req$query$limit, _req$query$skip = _req$query.skip, skip = _req$query$skip === void 0 ? 0 : _req$query$skip;
            querry = {
              state: true
            };
            _context.prev = 4;
            _context.next = 7;
            return Promise.all([_Song["default"].countDocuments(querry), _Song["default"].find(querry).limit(limit).skip(skip).populate('gender', 'name').populate('artist', 'name').populate('user', 'name')]);

          case 7:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            count = _yield$Promise$all2[0];
            songs = _yield$Promise$all2[1];
            res.json({
              count: count,
              songs: songs
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 14]]);
  }));

  return function getSongs() {
    return _ref.apply(this, arguments);
  };
}();

exports.getSongs = getSongs;

var getSong = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var req,
        res,
        id,
        song,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _express.request;
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            id = req.params.id;
            _context2.prev = 3;
            _context2.next = 6;
            return _Song["default"].findById(id).populate('gender', 'name').populate('artist', 'name').populate('user', 'name');

          case 6:
            song = _context2.sent;
            res.json(song);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));

  return function getSong() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSong = getSong;

var postSong = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var req,
        res,
        _req$body,
        name,
        gender,
        artist,
        year,
        genderFound,
        artistFound,
        song,
        songSaved,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : _express.request;
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _req$body = req.body, name = _req$body.name, gender = _req$body.gender, artist = _req$body.artist, year = _req$body.year;
            _context3.prev = 3;
            _context3.next = 6;
            return _Gender["default"].findOne({
              name: gender
            });

          case 6:
            genderFound = _context3.sent;
            _context3.next = 9;
            return _Artist["default"].findOne({
              name: artist
            });

          case 9:
            artistFound = _context3.sent;
            song = new _Song["default"]({
              name: name,
              gender: genderFound._id,
              artist: artistFound._id,
              year: year,
              user: req.userAuth._id
            });
            _context3.next = 13;
            return song.save();

          case 13:
            songSaved = _context3.sent;
            res.json(songSaved);
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 17]]);
  }));

  return function postSong() {
    return _ref3.apply(this, arguments);
  };
}();

exports.postSong = postSong;

var updateSong = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var req,
        res,
        id,
        _req$body2,
        name,
        gender,
        artist,
        year,
        data,
        genderFound,
        artistFound,
        songUpdate,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            req = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : _express.request;
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, gender = _req$body2.gender, artist = _req$body2.artist, year = _req$body2.year;
            _context4.prev = 4;
            data = {
              name: name,
              gender: gender,
              artist: artist,
              year: year
            };

            if (!gender) {
              _context4.next = 11;
              break;
            }

            _context4.next = 9;
            return _Gender["default"].findOne({
              name: gender
            });

          case 9:
            genderFound = _context4.sent;
            data.gender = genderFound._id;

          case 11:
            if (!artist) {
              _context4.next = 16;
              break;
            }

            _context4.next = 14;
            return _Artist["default"].findOne({
              name: artist
            });

          case 14:
            artistFound = _context4.sent;
            data.artist = artistFound._id;

          case 16:
            _context4.next = 18;
            return _Song["default"].findByIdAndUpdate(id, data, {
              "new": true
            });

          case 18:
            songUpdate = _context4.sent;
            res.json(songUpdate);
            _context4.next = 25;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 22]]);
  }));

  return function updateSong() {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSong = updateSong;

var deleteSong = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var req,
        res,
        id,
        songDeleted,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : _express.request;
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            id = req.params.id;
            _context5.prev = 3;
            _context5.next = 6;
            return _Song["default"].findByIdAndUpdate(id, {
              state: false
            }, {
              "new": true
            });

          case 6:
            songDeleted = _context5.sent;
            res.json(songDeleted);
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));

  return function deleteSong() {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSong = deleteSong;