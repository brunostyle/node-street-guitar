import { Router } from 'express';
import { check } from 'express-validator';
import { validateField, validateJWT } from '../middlewares';
import { existGender, nameGenderExist } from '../helpers/db-validator';
import { deleteGender, getGender, getGenders, postGender, updateGender } from '../controllers/genders';
const router = Router();

router.get('/', [
    check('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(),
    check('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(),
    validateField
], getGenders);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existGender),
    validateField
], getGender);

router.post('/', [
    validateJWT,
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString().toUpperCase(),
    check('name').custom(nameGenderExist),
    validateField
], postGender);

router.put('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existGender),
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString().toUpperCase(),
    check('name').custom(nameGenderExist),
    validateField
], updateGender);

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existGender),
    validateField
], deleteGender);

export default router;