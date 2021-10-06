import { request, response} from 'express';
import generateJWT from '../helpers/jwt-generator';
import User from '../models/User';

export const login = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400).json({msg: 'El email no coincide'});
        
        if(!userFound.state) return res.status(400).json({msg: 'El usuario no esta activo'});

        const passwordMatch = await User.comparePassword(password, userFound.password);
        if(!passwordMatch) return res.status(400).json({msg: 'Contraseña incorrecta'});

        const token = await generateJWT(userFound._id);

        res.json({userFound, token});
    } catch (error) {
        console.log(error);
    }
}