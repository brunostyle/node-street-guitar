"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var genderSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  state: {
    type: Boolean,
    "default": true
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Gender', genderSchema);

exports["default"] = _default;