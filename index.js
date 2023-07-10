const express=require("express")
require('dotenv').config()
const {connection}=require("./db")
const { userrouter } = require("./routes/userrouter")
const { restrouter } = require("./routes/restro.route")
const { orderrouter } = require("./routes/order.routes")
const app=express()

app.use(express.json())
app.use("/user",userrouter)
app.use("/restro",restrouter)
app.use("/api",orderrouter)

app.listen(process.env.port,async(req,res)=>{
    try{
      await connection;
      console.log("connected to database")
    }catch(err)
    {
      console.log("Error in connection the database")
      console.log(err.message)
    }
    console.log("server is running at port 4500")
})