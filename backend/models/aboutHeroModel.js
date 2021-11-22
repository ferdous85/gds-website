const mongoose = require('mongoose')

const aboutHeroShema = new mongoose.Schema({
    title:{
        type: String,
    },
    subtitle:{
        type: String,
    },
    description:{
        type: String,
    },
    

 } )

 module.exports = mongoose.model ('AboutHero', aboutHeroShema)