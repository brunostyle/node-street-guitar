import { Router } from 'express';
import { check } from 'express-validator';
import { validateField } from '../middlewares';
import { login } from '../controllers/auth';
const router = Router();

router.post('/login', [
    check('email', 'El email es requerido').not().isEmpty(),
    check('email', 'El email no es valido').optional().isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    validateField
], login);

export default router;