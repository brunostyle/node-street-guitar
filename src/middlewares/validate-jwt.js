import { request, response } from "express";
import User from '../models/User';
import jwt from 'jsonwebtoken';

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('access-token');

    if(!token) return res.status(400).json({msg: 'No has enviado el token de acceso'});

    try {
        const { id } = jwt.verify(token, process.env.SECRET_WORD);
        
        const user = await User.findById(id);

        if(!user) return res.status(400).json({msg: 'El usuario no existe en la base de datos'});

        if(!user.state) return res.status(400).json({msg: 'Token no valido'});

        req.userAuth = user;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: 'Token no valido'});
    }
}

export default validateJWT;