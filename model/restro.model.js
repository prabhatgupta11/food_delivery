const mongoose=require('mongoose')

const restroschmea=mongoose.Schema({
 
        name: String,
        address: {
          street: String,
          city: String,
          state: String,
          country: String,
          zip: String
        },
        menu: [{
          
          name: String,
          description: String,
          price: Number,
          image: String
        }]
      
})

const RestroModel=mongoose.model("restro",restroschmea)
module.exports={
    RestroModel
}