"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const validateField = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

var _default = validateField;
exports.default = _default;