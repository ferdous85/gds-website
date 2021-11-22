const mongoose = require('mongoose')

const quickTestSchema = new mongoose.Schema({
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

 module.exports = mongoose.model ('QuickTest', quickTestSchema)