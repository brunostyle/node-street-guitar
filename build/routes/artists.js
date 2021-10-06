"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _middlewares = require("../middlewares");

var _dbValidator = require("../helpers/db-validator");

var _artists = require("../controllers/artists");

var router = (0, _express.Router)();
router.get('/', [(0, _expressValidator.check)('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(), (0, _expressValidator.check)('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(), _middlewares.validateField], _artists.getArtists);
router.get('/:id', [(0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existArtist), _middlewares.validateField], _artists.getArtist);
router.post('/', [_middlewares.validateJWT, (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('name').custom(_dbValidator.nameArtistExist), _middlewares.validateField], _artists.postArtist);
router.put('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existArtist), (0, _expressValidator.check)('name', 'El nombre es requerido').not().isEmpty(), (0, _expressValidator.check)('name', 'El nombre debe ser un string').optional().isString().toUpperCase(), (0, _expressValidator.check)('name').custom(_dbValidator.nameArtistExist), _middlewares.validateField], _artists.updateArtist);
router["delete"]('/:id', [_middlewares.validateJWT, (0, _expressValidator.check)('id', 'No es un ID valido').isMongoId(), (0, _expressValidator.check)('id').custom(_dbValidator.existArtist), _middlewares.validateField], _artists.deleteArtist);
var _default = router;
exports["default"] = _default;