const catchAsyncError = require('../middleware/catchAsyncError')
const QuickTest = require('../models/quickTestModel')
const ErrorHandler = require('../utils/errorHandler')


// Create Quick Road Test -- Super-Admin
exports.createQuickTest = catchAsyncError(async (req, res) =>{
    const qfee = await QuickTest.create(req.body)

    res.status(201).json({
        success: true,
        qfee
    })
})

// Get All Quick Road Test - Admin

exports.getAllQuickTest = catchAsyncError(async (req, res) =>{
    const qfees = await QuickTest.find()
    
    res.status(201).json({
        success: true,
        qfees})
})

//get single Quick Road Test - Admin
exports.getQuickTestDetail = catchAsyncError(async (req, res, next) =>{
    const qfee = await QuickTest.findById(req.params.id)
    if(!qfee) {
        return next(new ErrorHandler("Quick Road Test Not Found", 404))
    }
    
    res.status(200).json(
        {   success: true,
            qfee}
      );
 })

// Update Quick Road Test - Admin

exports.updateQuickTest = catchAsyncError(async (req, res, next) =>{
    let oldFee = await QuickTest.findById(req.params.id)

    if(!oldFee) {
        return next(new ErrorHandler("Quick Road Test Not Found", 404))
    }

    qfee = await QuickTest.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    
    res.status(201).json({
        success: true,
        qfee
    })
})

// Delete Quick Road Test - Super-Admin

exports.deleteQuickTest = catchAsyncError(async (req, res, next) =>{
    const qfee = await QuickTest.findById(req.params.id)

    if(!qfee) {
        return next(new ErrorHandler("Quick Road Test Not Found", 404))
    }

    await qfee.remove()

    res.status(201).json({
        success: true,
        message:"Quick Road Test Fees Successfully"
    })
}

)
