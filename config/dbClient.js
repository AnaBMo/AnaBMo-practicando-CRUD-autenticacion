import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

class dbClient {
    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/userMascotas?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
        console.log('Conectado a la base de datos ✅');
    }

    // Método para cerrar la conexión si es necesario en situaciones de mantenimiento, por ejemplo.
    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log("Conexión a la base de datos cerrada 🟢");
        } catch (e) {
            console.error(" ❌Error al cerrar la conexión:", e);
        }
    }
}

export default new dbClient();