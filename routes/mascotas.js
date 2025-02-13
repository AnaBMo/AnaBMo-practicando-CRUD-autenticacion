import express from 'express';
const route = express.Router();
import mascotasController from '../controllers/mascotas.js'
import {verificarToken} from '../helpers/autenticacion.js'

route.post('/', mascotasController.create);
route.get('/', mascotasController.getAll);
route.get('/:id', mascotasController.getOne);
route.put('/:id', verificarToken, mascotasController.update);
route.delete('/:id', verificarToken, mascotasController.delete);

export default route;