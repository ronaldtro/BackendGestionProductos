import mongoose from "mongoose"


const clienteSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    direccion: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    telefono: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true}
}, {timestamps: true}) //timestamps: crea 2 columnas mas, creado y actualizado



const Cliente = mongoose.model("Cliente", clienteSchema)

export default Cliente
