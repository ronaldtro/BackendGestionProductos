import mongoose from "mongoose"
import Cliente from "../models/Cliente.js"

export const registrarClientes = async (req, res) => {

    try {
        const cliente = new Cliente(req.body)
        const clienteAlmacenado = await cliente.save()
        res.json(clienteAlmacenado)

    } catch (error) {
        console.log(error)
    }
}


export const verClientes = async (req, res) => {

    const clientes = await Cliente.find()
    
    if (!clientes) {
        const error = new Error('No hay clientes')
        return res.status(404).json({ msg: error.message })
    } else {
        res.json(clientes)
    }
}

export const verCliente = async (req, res) => {

    const {id} = req.params

    const cliente = await Cliente.findOne({id})
    
    if (!cliente) {
        const error = new Error('No hay clientes')
        return res.status(404).json({ msg: error.message })
    } else {
        res.json(cliente)
    }
}

