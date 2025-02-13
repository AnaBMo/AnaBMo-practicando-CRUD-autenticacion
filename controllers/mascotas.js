import MascotaModel from "../models/mascotas.js"; 

class mascotasController {
    constructor() {

    };

    // 
    async create(req, res) {
        try {
            const data = await MascotaModel.create(req.body); // esperar a que la promesa de llamada a la función se resuelva antes de enviar la respuesta. 
            res.status(201).json({ message: '🟩 create-ok', data });
        } catch(error){
            res.status(500).send(error);
        }
    };

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = await MascotaModel.update(id, req.body); 
            res.status(200).json(data);
        } catch(error){
            res.status(500).send(error);
        }
    };

    async delete(req, res) {
        try {
            const {id} = req.params;
            const data = await MascotaModel.delete(id);
            res.status(206).json(data);
        } catch(error){
            res.status(500).send(error);
        }
    };

    async getAll(req, res) {
        try {
            const data = await MascotaModel.getAll();
            res.status(200).json(data);
        } catch(error){
            res.status(500).send(error);
        }
    };

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const data = await MascotaModel.getOne(id);

            if (!data) {
                return res.status(404).json({ message: "Mascota no encontrada" }); 
            };

            res.status(200).json(data);
        } catch(error){
            res.status(500).send(error);
        }
    };
};

export default new mascotasController();