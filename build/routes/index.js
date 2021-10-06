"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "auth", {
  enumerable: true,
  get: function () {
    return _auth.default;
  }
});
Object.defineProperty(exports, "users", {
  enumerable: true,
  get: function () {
    return _users.default;
  }
});
Object.defineProperty(exports, "songs", {
  enumerable: true,
  get: function () {
    return _songs.default;
  }
});
Object.defineProperty(exports, "genders", {
  enumerable: true,
  get: function () {
    return _genders.default;
  }
});
Object.defineProperty(exports, "artists", {
  enumerable: true,
  get: function () {
    return _artists.default;
  }
});

var _auth = _interopRequireDefault(require("./auth"));

var _users = _interopRequireDefault(require("./users"));

var _songs = _interopRequireDefault(require("./songs"));

var _genders = _interopRequireDefault(require("./genders"));

var _artists = _interopRequireDefault(require("./artists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }