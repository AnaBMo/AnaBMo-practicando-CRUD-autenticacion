import mongoose from "mongoose";
import Usuario from "../schemas/usuarios.js"

class usuarioModel {

    async create(usuario) {
        try {
            return await Usuario.create(usuario);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw new Error('Error al crear usuario');
        }
    };

    async update(id, usuario) {
        try {
            return await Usuario.findOneAndUpdate(
                { _id: new mongoose.Types.ObjectId(id) },
                usuario, // Debe ser 'usuario' (no 'Usuario')
                { new: true }
            );
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw new Error('Error al actualizar usuario');
        }
    };

    async delete(id) {
        try {
            return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw new Error('Error al eliminar usuario');
        }
    };

    async getAll() {
        try {
            return await Usuario.find();
        } catch (error) {
            console.error('Error al obtener todos los usuarios:', error);
            throw new Error('Error al obtener usuarios');
        }
    };

    async getOneById(id) {
        try {
            return await Usuario.findById(id);
        } catch (error) {
            console.error('Error al obtener usuario por ID:', error);
            throw new Error('Error al obtener usuario');
        }
    };

    async getOne(filtro) {
        try {
            return await Usuario.findOne(filtro); // Aquí 'filtro' es el parámetro correcto.
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            throw new Error('Error al obtener usuario');
        }
    };

};

export default new usuarioModel;