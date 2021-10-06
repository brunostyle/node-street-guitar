import { Router } from 'express';
import { check } from 'express-validator'
import { validateField, validateJWT } from '../middlewares'
import { existArtist, nameArtistExist } from '../helpers/db-validator'
import { deleteArtist, getArtist, getArtists, postArtist, updateArtist } from '../controllers/artists'
const router = Router();

router.get('/', [
    check('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(),
    check('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(),
    validateField
], getArtists);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existArtist),
    validateField
], getArtist);

router.post('/', [
    validateJWT,
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString().toUpperCase(),
    check('name').custom(nameArtistExist),
    validateField
], postArtist);

router.put('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existArtist),
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString().toUpperCase(),
    check('name').custom(nameArtistExist),
    validateField
], updateArtist);

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existArtist),
    validateField
], deleteArtist);

export default router; 