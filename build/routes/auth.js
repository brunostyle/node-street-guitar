"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _middlewares = require("../middlewares");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.post('/login', [(0, _expressValidator.check)('email', 'El email es requerido').not().isEmpty(), (0, _expressValidator.check)('email', 'El email no es valido').optional().isEmail(), (0, _expressValidator.check)('password', 'La contraseña es requerida').not().isEmpty(), _middlewares.validateField], _auth.login);
var _default = router;
exports["default"] = _default;