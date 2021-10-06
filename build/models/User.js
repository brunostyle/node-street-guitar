"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false
});

userSchema.statics.encryptPassword = async password => {
  const salt = _bcryptjs.default.genSaltSync(10);

  return _bcryptjs.default.hashSync(password, salt);
};

userSchema.statics.comparePassword = async (receivedPassword, password) => {
  return _bcryptjs.default.compareSync(receivedPassword, password);
};

userSchema.methods.toJSON = function () {
  const {
    password,
    ...user
  } = this.toObject();
  return user;
};

var _default = (0, _mongoose.model)('User', userSchema);

exports.default = _default;