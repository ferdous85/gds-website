const mongoose = require('mongoose')

const sixImgSchema = new mongoose.Schema({
    name:{
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
    }
 } )

 module.exports = mongoose.model ('SixImg', sixImgSchema)