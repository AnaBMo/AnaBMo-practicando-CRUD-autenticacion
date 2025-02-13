import express from 'express';
const route = express.Router();
import usuariosController from '../controllers/usuarios.js'
import { verificarToken } from '../helpers/autenticacion.js';

route.post('/register', usuariosController.register);
route.post('/login', usuariosController.login);
route.get('/profile', verificarToken, usuariosController.getProfile);

export default route;