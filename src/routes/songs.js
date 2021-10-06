import { Router } from 'express';
import { check } from 'express-validator'
import { validateField, validateJWT } from '../middlewares'
import { existSong, existGenderByName, existArtistByName } from '../helpers/db-validator'
import { deleteSong, getSong, getSongs, postSong, updateSong } from '../controllers/songs'
const router = Router();

router.get('/', [
    check('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(),
    check('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(),
    validateField
], getSongs);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existSong),
    validateField
], getSong);

router.post('/', [
    validateJWT,    
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString(),
    check('gender', 'El genero es requerido').not().isEmpty(),
    check('gender', 'El genero debe ser un string').optional().isString().toUpperCase(),
    check('gender').custom(existGenderByName),
    check('artist', 'El artista es requerido').not().isEmpty(),
    check('artist', 'El artista debe ser un string').optional().isString().toUpperCase(),
    check('artist').custom(existArtistByName),
    check('year', 'El año es requerido').not().isEmpty(),
    check('year', 'El año debe ser un numero').optional().isNumeric().toInt(),
    validateField
], postSong);

router.put('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existSong),
    check('name', 'El nombre es requerido').optional().not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString(),
    check('gender', 'El genero es requerido').optional().not().isEmpty(),
    check('gender', 'El genero debe ser un string').optional().isString().toUpperCase(),
    check('gender').optional().custom(existGenderByName),
    check('artist', 'El artista es requerido').optional().not().isEmpty(),
    check('artist', 'El artista debe ser un string').optional().isString().toUpperCase(),
    check('artist').optional().custom(existArtistByName),
    check('year', 'El año es requerido').optional().not().isEmpty(),
    check('year', 'El año debe ser un numero').optional().isNumeric().toInt(),
    validateField
], updateSong);

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existSong),
    validateField
], deleteSong);

export default router;