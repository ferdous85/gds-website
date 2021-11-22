const mongoose = require('mongoose')

const onclsSchema = new mongoose.Schema({
    name:{
        type: String,        
    },
    price:{
        type: Number,        
    },
    description:{
        type: String        
    },
    time:{
        type: String,        
    },
    address:{
        type: String,        
    },
    opOne:{
        type: String
    },
    opTwo:{
        type: String
    },
    opThree:{
        type: String
    },
    opFour:{
        type: String
    },
    rqOne:{
        type: String
    },
    rqTwo:{
        type: String
    },
    rqThree:{
        type: String
    },
    rqFour:{
        type: String
    },
    rqFive:{
        type: String
    },
    category:{
        type: String
    },
    
 } )

 module.exports = mongoose.model ('Oncls', onclsSchema)