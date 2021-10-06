"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteGender = exports.updateGender = exports.postGender = exports.getGender = exports.getGenders = void 0;

var _Gender = _interopRequireDefault(require("../models/Gender"));

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

var getGenders = /*#__PURE__*/function () {
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
        genders,
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
            return Promise.all([_Gender["default"].countDocuments(querry), _Gender["default"].find(querry).limit(limit).skip(skip)]);

          case 7:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            count = _yield$Promise$all2[0];
            genders = _yield$Promise$all2[1];
            res.json({
              count: count,
              genders: genders
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

  return function getGenders() {
    return _ref.apply(this, arguments);
  };
}();

exports.getGenders = getGenders;

var getGender = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var req,
        res,
        id,
        gender,
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
            return _Gender["default"].findById(id);

          case 6:
            gender = _context2.sent;
            res.json(gender);
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

  return function getGender() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getGender = getGender;

var postGender = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var req,
        res,
        name,
        gender,
        genderSaved,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : _express.request;
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            name = req.body.name;
            _context3.prev = 3;
            gender = new _Gender["default"]({
              name: name
            });
            _context3.next = 7;
            return gender.save();

          case 7:
            genderSaved = _context3.sent;
            res.json(genderSaved);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));

  return function postGender() {
    return _ref3.apply(this, arguments);
  };
}();

exports.postGender = postGender;

var updateGender = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var req,
        res,
        id,
        name,
        genderUpdate,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            req = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : _express.request;
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            id = req.params.id;
            name = req.body.name;
            _context4.prev = 4;
            _context4.next = 7;
            return _Gender["default"].findByIdAndUpdate(id, {
              name: name
            }, {
              "new": true
            });

          case 7:
            genderUpdate = _context4.sent;
            res.json(genderUpdate);
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 11]]);
  }));

  return function updateGender() {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateGender = updateGender;

var deleteGender = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var req,
        res,
        id,
        genderDeleted,
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
            return _Gender["default"].findByIdAndUpdate(id, {
              state: false
            }, {
              "new": true
            });

          case 6:
            genderDeleted = _context5.sent;
            res.json(genderDeleted);
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

  return function deleteGender() {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteGender = deleteGender;