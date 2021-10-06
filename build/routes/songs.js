"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _middlewares = require("../middlewares");

var _dbValidator = require("../helpers/db-validator");

var _songs = require("../controllers/songs");

var router = (0, _express.Router)();
router.get('/', [(0, _expressValidator.check)('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(), (0, _expressValidator.check)('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(), _middlewares.validateField], _songs.getSongs);
router.get('/:id', [(0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existSong), _middlewares.validateField], _songs.getSong);
router.post('/', [_middlewares.validateJWT, (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString(), (0, _expressValidator.check)('gender', 'El genero es requerido').not().isEmpty(), (0, _expressValidator.check)('gender', 'El genero debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('gender').custom(_dbValidator.existGenderByName), (0, _expressValidator.check)('artist', 'El artista es requerido').not().isEmpty(), (0, _expressValidator.check)('artist', 'El artista debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('artist').custom(_dbValidator.existArtistByName), (0, _expressValidator.check)('year', 'El año es requerido').not().isEmpty(), (0, _expressValidator.check)('year', 'El año debe ser un numero').optional().isNumeric().toInt(), _middlewares.validateField], _songs.postSong);
router.put('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existSong), (0, _expressValidator.check)('name', 'El nombre es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString(), (0, _expressValidator.check)('gender', 'El genero es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('gender', 'El genero debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('gender').optional().custom(_dbValidator.existGenderByName), (0, _expressValidator.check)('artist', 'El artista es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('artist', 'El artista debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('artist').optional().custom(_dbValidator.existArtistByName), (0, _expressValidator.check)('year', 'El año es requerido').optional().not().isEmpty(), (0, _expressValidator.check)('year', 'El año debe ser un numero').optional().isNumeric().toInt(), _middlewares.validateField], _songs.updateSong);
router["delete"]('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existSong), _middlewares.validateField], _songs.deleteSong);
var _default = router;
exports["default"] = _default;