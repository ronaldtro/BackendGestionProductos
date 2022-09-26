import mongoose from "mongoose"
import bcrypt from 'bcrypt'

const productSchema = mongoose.Schema({
    codigo: {type: String, required: true, trim: true},
    nombre: {type: String, required: true, trim: true},
    precio: {type: String, required: true, trim: true}
}, {timestamps: true}) //timestamps: crea 2 columnas mas, creado y actualizado



const Product = mongoose.model("Product", productSchema)

export default Product