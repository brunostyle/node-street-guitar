"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var songSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Gender',
    required: true
  },
  artist: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  state: {
    type: Boolean,
    "default": true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Song', songSchema);

exports["default"] = _default;