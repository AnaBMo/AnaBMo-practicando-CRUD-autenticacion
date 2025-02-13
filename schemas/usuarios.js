import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema (
    {
        email: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true
        },
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        telefono: {
            type: String,
            required: false, 
        },
        clave: {
            type: String,
            required: true
        }, 
    }, {timestamps: true}
);

export default mongoose.model('usuarios', usuarioSchema);