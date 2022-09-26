import express, { Router } from 'express'
import { verClientes, registrarClientes, verCliente} from '../controllers/ClienteController.js'


const ClienteRoutes = express.Router()


ClienteRoutes.post('/', registrarClientes)
ClienteRoutes.get('/', verClientes)
ClienteRoutes.get('/:id', verCliente)

export default ClienteRoutes

