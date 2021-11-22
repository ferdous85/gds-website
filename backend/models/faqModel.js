const mongoose = require('mongoose')

const faqSchema = new mongoose.Schema({
    question:{
        type: String,
        required:[true, 'Please enter Question']
    },
    answer:{
        type: String        
    },
    eventKey:{type:String}
 } )

 module.exports = mongoose.model ('Faq', faqSchema)