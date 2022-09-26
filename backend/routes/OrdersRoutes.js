import checkAuth from '../middleware/checkAuth.js'
import express from 'express'
import {
    registrarOrden,
    verOrden,
    verOrdenes
} from '../controllers/OrdersController.js'

const router = express.Router()

router.post('/', registrarOrden)
router.get('/', verOrdenes)
router.get('/:id', verOrden)


export default router


