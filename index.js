const express=require("express")
require('dotenv').config()
const {connection}=require("./db")
const { userrouter } = require("./routes/userrouter")
var cors = require('cors')

const app=express()

app.use(express.json())
app.use(cors())
app.use("/user",userrouter)


app.use("/",(req,res)=>{
  res.send({msg:"working"})
})

app.listen(process.env.port,async()=>{
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