const mongoose = require('mongoose')
const services= mongoose.Schema({
        title:String,
        description:String,
        linkText:String,
        link:String
})

module.exports=mongoose.model("services",services)