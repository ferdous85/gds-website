const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    discount:{
        type: String,
        required:[true, 'Please enter Discount/Pricing Update']
    },
    pricingAmount:{
        type: Number,
        required:[true, 'Please enter Pricing Amount in $ (Doller)']
    },
    packageName:{
        type: String,
        required:[true, 'Please enter Package Name']
    },
    packageLength:{
        type: String,
        required:[true, 'Please enter Package Duration']
    },
    cerName:{
        type: String,
        required:[true, 'Please enter Certification Name']
    },
    packageApt:{
        type: String,
        required:[true, 'Please enter DMV Appointment Status']
    },
    carRental:{
        type: String,
        required:[true, 'Please enter Car Rental Times']
    },
    roadTest:{
        type: String,
        required:[true, 'Please enter Road Test Times']
    },
    

 } )

 module.exports = mongoose.model ('Package', packageSchema)