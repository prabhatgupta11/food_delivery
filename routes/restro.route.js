const express=require("express")
const {RestroModel}=require('../model/restro.model')

const restrouter=express.Router()

restrouter.post("/add",async(req,res)=>{
    try{
      const payload=req.body
      const restro=new RestroModel(payload)
      await restro.save();

      res.send("restro added")
    }catch(err)
    {
        console.log(err)
    }
})

//get restro

restrouter.get("/get",async(req,res)=>{
    try{
        const restro= await RestroModel.find()
        res.status(200).send(restro)

    }catch(err)
    {
        console.log(err)
    }
})

//get restro by id


restrouter.get("/get/:id",async(req,res)=>{
    try{
        let id=req.params.id

        const restro= await RestroModel.findById(id)
        res.status(200).send(restro)

    }catch(err)
    {
        console.log(err)
    }

})
//get menu of a specifuic restro by id



restrouter.get("/api/restaurants/:id/menu",async(req,res)=>{
    try{
        const {id}=req.params;
        const restro=await RestroModel.findById(id);
        if(!restro)
        {
            res.status(404).send("error while sepecific restro")
        }
        res.status(200).json(restro.menu);

    }catch(err)
    {
        console.log(err)
    }
})

//add specific

restrouter.post("/api/restaurants/:id/menu",async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,description,price,image}=req.body;
        const restro=await RestroModel.findById(id)

        const newrestro={name,description,price,image}
        restro.menu.push(newrestro);
        await restro.save();
        res.status(201).send(" restro updated/added")
    }catch(err)
    {
     console.log(err)
    }
})


//delete speci

restrouter.delete("/api/restaurants/:restroid/menu/:itemid",async(req,res)=>{
    try{  
         
        const {restroid,itemid}=req.params;
        const restro=await RestroModel.findById(restroid)

        const menuitm=restro.menu.id(itemid);

        menuitm.remove();
        await restro.save();

        res.status(202).send(restro)
    }catch(err)
    {
        console.log(err)
    }
})
module.exports={
    restrouter
}