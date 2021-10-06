import { Router } from 'express';
import { check } from 'express-validator';
import { validateField, validateJWT } from '../middlewares';
import { emailUserExist, existUser } from '../helpers/db-validator';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/users';
const router = Router();

router.get('/', [
    check('limit', 'El limit debe ser un valor numerico').optional().isNumeric().toInt(),
    check('skip', 'El skip debe ser un valor numerico').optional().isNumeric().toInt(),
    validateField
], getUsers);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existUser),
    validateField
], getUser);

router.post('/', [
    validateJWT,  
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString(),
    check('email', 'El email es requerido').not().isEmpty(),
    check('email', 'El email no es valido').optional().isEmail(),
    check('email').custom(emailUserExist),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({min: 6}),
    check('password', 'La contraseña no debe tener mas de 20 caracteres').optional().isLength({max: 20}),
    validateField
], postUser);

router.put('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existUser),
    check('name', 'El nombre es requerido').optional().not().isEmpty(),
    check('name', 'El nombre debe ser un string').optional().isString(),
    check('email', 'El email es requerido').optional().not().isEmpty(),
    check('email', 'El email no es valido').optional().isEmail(),
    check('email').optional().custom(emailUserExist),
    check('password', 'La contraseña es requerida').optional().not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({min: 6}),
    check('password', 'La contraseña no debe tener mas de 20 caracteres').optional().isLength({max: 20}),
    validateField
], updateUser);

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existUser),    
    validateField
], deleteUser);


export default router;