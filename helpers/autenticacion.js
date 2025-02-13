import jsonwebtoken from "jsonwebtoken"; 

import dotenv from 'dotenv'; // para traer el token secreto del entorno y poder firmar
dotenv.config();

function generarToken(email) {
    return jsonwebtoken.sign({email}, process.env.JWT_TOKEN_SECRET, {expiresIn: '1h'});

};

function verificarToken(req, res, next) {

    const token = req.header('Authorization')?.replace('Bearer', '');
    
    if(!token){
        return res.status(401).json({error: 'Token requerido'})
    };

    try{
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
        console.log(dataToken.email);
        req.emailConectado = dataToken.email;
        next();

    } catch(e) {
        res.status(401).json({error: 'Token no válido'});
    };
    
};


export {generarToken, verificarToken};