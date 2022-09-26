import {
    verProducto,
    verProductos,
    registrarProductos
} from '../controllers/ProductsController.js'

import checkAuth from '../middleware/checkAuth.js'
import express from 'express'

const router = express.Router()

router.post('/', registrarProductos)
router.get('/', verProductos)
router.get('/:id', verProducto)




export default router