"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _database = _interopRequireDefault(require("../database/database"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
  constructor() {
    this.app = (0, _express.default)();
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

  async connectDB() {
    await (0, _database.default)();
  }

  middlewares() {
    this.app.use(_express.default.json());
    this.app.use((0, _cors.default)());
  }

  routes() {
    this.app.use(this.path.auth, _routes.auth);
    this.app.use(this.path.users, _routes.users);
    this.app.use(this.path.songs, _routes.songs);
    this.app.use(this.path.genders, _routes.genders);
    this.app.use(this.path.artists, _routes.artists);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server on port:', this.port);
    });
  }

}

var _default = Server;
exports.default = _default;