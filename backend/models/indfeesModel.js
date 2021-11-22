const mongoose = require('mongoose')

const indfeesSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    

 } )

 module.exports = mongoose.model ('Indfees', indfeesSchema)