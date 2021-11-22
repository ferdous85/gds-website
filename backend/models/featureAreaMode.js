const mongoose = require('mongoose')

const featureAreaSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please enter First Heading']
    },
    subtitle:{
        type: String,
        required:[true, 'Please enter Second Heading']
    },
    description:{
        type: String,
        required:[true, 'Please enter Feature Text Correctly']
    },
    

 } )

 module.exports = mongoose.model ('FeatureArea', featureAreaSchema)