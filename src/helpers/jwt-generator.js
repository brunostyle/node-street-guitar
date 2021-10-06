import jwt from 'jsonwebtoken';

const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id }, process.env.SECRET_WORD, {
            expiresIn: '6h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token)
            }
        });
    });
}

export default generateJWT;

