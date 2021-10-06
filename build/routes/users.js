"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _middlewares = require("../middlewares");

var _dbValidator = require("../helpers/db-validator");

var _users = require("../controllers/users");

const router = (0, _express.Router)();
router.get('/', [(0, _expressValidator.check)('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(), (0, _expressValidator.check)('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(), _middlewares.validateField], _users.getUsers);
router.get('/:id', [(0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existUser), _middlewares.validateField], _users.getUser);
router.post('/', [_middlewares.validateJWT, (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString(), (0, _expressValidator.check)('email', 'El email es requerido').not().isEmpty(), (0, _expressValidator.check)('email', 'El email no es valido').optional().isEmail(), (0, _expressValidator.check)('email').custom(_dbValidator.emailUserExist), (0, _expressValidator.check)('password', 'La contraseña es requerida').not().isEmpty(), (0, _expressValidator.check)('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({
  min: 6
}), (0, _expressValidator.check)('password', 'La contraseña no debe tener mas de 20 caracteres').optional().isLength({
  max: 20
}), _middlewares.validateField], _users.postUser);
router.put('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existUser), (0, _expressValidator.check)('name', 'El nombre es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString(), (0, _expressValidator.check)('email', 'El email es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('email', 'El email no es valido').optional().isEmail(), (0, _expressValidator.check)('email').optional().custom(_dbValidator.emailUserExist), (0, _expressValidator.check)('password', 'La contraseña es requerida').optional().not().isEmpty(), (0, _expressValidator.check)('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({
  min: 6
}), (0, _expressValidator.check)('password', 'La contraseña no debe tener mas de 20 caracteres').optional().isLength({
  max: 20
}), _middlewares.validateField], _users.updateUser);
router.delete('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existUser), _middlewares.validateField], _users.deleteUser);
var _default = router;
exports.default = _default;