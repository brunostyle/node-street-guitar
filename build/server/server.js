"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _database = _interopRequireDefault(require("../database/database"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Server = /*#__PURE__*/function () {
  function Server() {
    _classCallCheck(this, Server);

    this.app = (0, _express["default"])();
    this.port = process.env.PORT || 3000;
    this.path = {
      auth: '/api/auth',
      users: '/api/users',
      songs: '/api/songs',
      genders: '/api/genders',
      artists: '/api/artists'
    };
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  _createClass(Server, [{
    key: "connectDB",
    value: function () {
      var _connectDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _database["default"])();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function connectDB() {
        return _connectDB.apply(this, arguments);
      }

      return connectDB;
    }()
  }, {
    key: "middlewares",
    value: function middlewares() {
      this.app.use(_express["default"].json());
      this.app.use((0, _cors["default"])());
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(this.path.auth, _routes.auth);
      this.app.use(this.path.users, _routes.users);
      this.app.use(this.path.songs, _routes.songs);
      this.app.use(this.path.genders, _routes.genders);
      this.app.use(this.path.artists, _routes.artists);
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log('Server on port:', _this.port);
      });
    }
  }]);

  return Server;
}();

var _default = Server;
exports["default"] = _default;