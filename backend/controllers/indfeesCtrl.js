const catchAsyncError = require('../middleware/catchAsyncError')
const Indfees = require('../models/indfeesModel')
const ErrorHandler = require('../utils/errorHandler')


// Create Individual Fees -- Super-Admin
exports.createIndFees = catchAsyncError(async (req, res) =>{
    const fees = await Indfees.create(req.body)

    res.status(201).json({
        success: true,
        fees
    })
})

// Get Individual Fees - Admin getAllIndFees

exports.getAllIndFees = catchAsyncError(async (req, res, next) =>{
    const fees = await Indfees.find()

    res.status(201).json({
        success: true,
        fees
    })
})
//get single Individual Fees - Admin getIndFeesDetails
exports.getIndFeesDetails = catchAsyncError(async (req, res, next) =>{
    const fee = await Indfees.findById(req.params.id)
    if(!fee) {
        return next(new ErrorHandler("Individual Fees Not Found", 404))
    }
    res.status(200).json({
        success: true,
        fee
      });
 })
// Update Individual Fees - Admin 

exports.updateIndFees = catchAsyncError(async (req, res, next) =>{
    let oldFee = await Indfees.findById(req.params.id)

    if(!oldFee) {
        return next(new ErrorHandler("Individual Fees Not Found", 404))
    }

   fee = await Indfees.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    
    res.status(201).json({
        success: true,
        fee
    })
})

// Delete Individual Fees - Super-Admin

exports.deleteIndFees = catchAsyncError(async (req, res, next) =>{
    const fee = await Indfees.findById(req.params.id)

    if(!fee) {
        return next(new ErrorHandler("Feature Not Found", 404))
    }

    await fee.remove()

    res.status(201).json({
        success: true,
        message:"Individual Fees Deleted Successfully "
    })
}

)
