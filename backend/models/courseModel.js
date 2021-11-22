const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please enter Course Name']
    },
    price:{
        type: Number,
        required:[true, 'Please enter Course Price']
    },
    description:{
        type: String,
        required:[true, 'Please enter Course Description']
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

 module.exports = mongoose.model ('Course', courseSchema)