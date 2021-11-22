const mongoose = require('mongoose')

const heroAreaSchema = new mongoose.Schema({
    title:{
        type: String
    },
    subtitle:{
        type: String
    },
    image:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },

 } )

 module.exports = mongoose.model ('HeroArea', heroAreaSchema)