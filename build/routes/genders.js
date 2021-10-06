"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _middlewares = require("../middlewares");

var _dbValidator = require("../helpers/db-validator");

var _genders = require("../controllers/genders");

const router = (0, _express.Router)();
router.get('/', [(0, _expressValidator.check)('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(), (0, _expressValidator.check)('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(), _middlewares.validateField], _genders.getGenders);
router.get('/:id', [(0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existGender), _middlewares.validateField], _genders.getGender);
router.post('/', [_middlewares.validateJWT, (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('name').custom(_dbValidator.nameGenderExist), _middlewares.validateField], _genders.postGender);
router.put('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existGender), (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('name').custom(_dbValidator.nameGenderExist), _middlewares.validateField], _genders.updateGender);
router.delete('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existGender), _middlewares.validateField], _genders.deleteGender);
var _default = router;
exports.default = _default;