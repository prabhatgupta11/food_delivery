const express=require("express")
const {OrderModel}=require("../model/order.model")

const orderrouter=express.Router()

 //get order by id
 orderrouter.get("/orders/:id",async(req,res)=>{
    try{
        let id=req.params.id

        const orders= await OrderModel.findById(id)
        res.status(200).send(orders)

    }catch(err)
    {
        console.log(err)
    }

})

 //update order by id
 orderrouter.patch("/orders/:id",async(req,res)=>{
    try{
        let id=req.params.id
        const data=req.body

        const orders= await OrderModel.findByIdAndUpdate(data)
        res.status(200).send(orders)

    }catch(err)
    {
        console.log(err)
    }

})

module.exports={
    orderrouter
}