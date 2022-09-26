import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    producto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    cliente: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cliente"
        }
    ,
    cantidad: {type: String, trim: true, required: true}    
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

export default Order