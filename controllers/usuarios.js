import usuarioModel from "../models/usuarios.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken"; // nos proporciona dos funcionalidades para nuestro token: sign & verify
import { generarToken } from "../helpers/autenticacion.js";

class usuariosController {
    constructor() {

    };

    async register(req, res) {
        try {
            const { email, nombre, telefono, clave } = req.body;

            const usuarioExiste = await usuarioModel.getOne({email :email}); // .findOne() nos devuelve el primer usuario de la lista que coincide con lo que hemos indicado.
            if(usuarioExiste){
                return res.status(400).json({error: 'El usuario ya existe'});
            };

            const claveEncriptada = await bcrypt.hash(clave,10);

            const data = await usuarioModel.create({
                email, 
                nombre, 
                telefono, 
                clave: claveEncriptada
            });  
            res.status(201).json({ message: '🟩 createUser-ok', data });
        } catch (error) {
            res.status(500).send(error);
        }

    };

    async login(req, res) {
        const { email, clave } = req.body;

        const usuarioExiste = await usuarioModel.getOne({email});
        if(!usuarioExiste){
            return res.status(400).json({error: 'El usuario no existe'});
        };

        const claveValida = await bcrypt.compare(clave, usuarioExiste.clave);
        if(!claveValida){
            return res.status(400).json({error: 'Clave no válida'});
        };

        const token = generarToken(email);

        return res.status(200).json({msg: 'Usuario autenticado', token});
    };

    async getProfile(req, res) {
            try {
                const data = await usuarioModel.getOne({ email: req.emailConectado });
    
                if (!data) {
                    return res.status(404).json({ message: "Mascota no encontrada" }); 
                };
    
                res.status(200).json(data);
            } catch(error){
                res.status(500).send(error);
            }
    };

};

export default new usuariosController();