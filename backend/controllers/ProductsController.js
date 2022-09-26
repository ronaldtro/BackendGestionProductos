
import mongoose from "mongoose"
import Product from "../models/Product.js"



const verProducto = async (req, res) => {

    const { id } = req.params

    try {
        const producto = await Product.findById(id)

        if (!producto) {
            const error = new Error('Producto no encontrado')
            return res.status(404).json({ msg: error.message })
        }

        return res.json(producto)

    } catch (error) {
        console.log(error)
    }

}

const verProductos = async (req, res) => {

    const productos = await Product.find()
    
    if (!productos) {
        const error = new Error('No hay clientes')
        return res.status(404).json({ msg: error.message })
    } else {
        res.json(productos)
    }
}

const registrarProductos = async (req, res) => {


    try {
        const producto = new Product(req.body)
        const productoAlmacenado = await producto.save()
        res.json(productoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}


export {
    verProducto,
    verProductos,
    registrarProductos
}