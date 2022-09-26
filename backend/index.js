import express from 'express'
import conectarDb from './config/db.js'
import dotenv from 'dotenv'

import ClienteRoutes from './routes/ClienteRoutes.js'
import ProductsRoutes from './routes/ProductsRoutes.js'
import OrdersRoutes from './routes/OrdersRoutes.js'


const app = express()
app.use(express.json())

dotenv.config()

conectarDb()

//Routing 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/customers', ClienteRoutes)
app.use('/products', ProductsRoutes)
app.use('/orders', OrdersRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})
