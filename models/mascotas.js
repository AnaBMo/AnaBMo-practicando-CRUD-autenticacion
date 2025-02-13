import mongoose from "mongoose";
import Mascota from "../schemas/mascotas.js"

class mascotaModel {

    async create(mascota){
       return await Mascota.create(mascota);
    };

    async update(id, mascota) {
        return await Mascota.findOneAndUpdate(
            {_id: new mongoose.Types.ObjectId(id)}, // hay que poner la id en forma de objeto. Mejor usar .findByIdAndUpdate()
            mascota, 
            {new : true} // este último es para volver a recibir la información después de haber sido actualizada.
        );
    };

    async delete(id){
        return await Mascota.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}); // hay que poner la id en forma de objeto. Mejor usar .findByIdAndUpdate()
    };

    async getAll(){
       return await Mascota.find();
    };

    async getOne(id){
        return await Mascota.findById(id);
    };
};

export default new mascotaModel;