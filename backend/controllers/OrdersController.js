import Order from "../models/Order.js"
import mongoose from "mongoose"

//ERRORES MAS COMUNES: 404-> no encontrado, 403-> no tienes los permisos, 401-> el usuario no esta autenticado


const registrarOrden = async (req, res) => {


    try {
        const orden = new Order(req.body)
        const ordenAlmacenada = await orden.save()
        res.json(ordenAlmacenada)
    } catch (error) {
        console.log(error)
    }
}

const verOrden = async (req, res) => {

    const { id } = req.params

    try {
        const orden = await Order.findById(id)

        return res.json(orden)

    } catch (error) {
        console.log(error)
    }

}


const verOrdenes = async (req, res) => {

    const ordenes = await Order.find()
    
    if (!ordenes) {
        const error = new Error('No hay ordenes')
        return res.status(404).json({ msg: error.message })
    } else {
        res.json(ordenes)
    }
}



export{
    registrarOrden,
    verOrden,
    verOrdenes
}