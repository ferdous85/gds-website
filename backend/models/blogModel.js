const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    smallTitle:{
        type: String,
        
    },
    title:{
        type: String,
        
    },
    date:{
        type: String       
    },
    description:{
        type: String
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    

 } )

 module.exports = mongoose.model ('Blog', blogSchema)