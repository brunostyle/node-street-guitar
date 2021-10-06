"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _server = _interopRequireDefault(require("./server/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const server = new _server.default();
server.listen();