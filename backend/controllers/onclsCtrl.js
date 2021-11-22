const catchAsyncError = require('../middleware/catchAsyncError')
const Oncls = require('../models/onclsModel')
const ErrorHandler = require('../utils/errorHandler')


// Create Online Class -- Super-Admin
exports.createOncls = catchAsyncError(async (req, res) =>{
    const oncls = await Oncls.create(req.body)

    res.status(201).json({
        success: true,
        oncls
    })
})

// Get Online Class - Admin getAllIndFees

exports.getAllOncls= catchAsyncError(async (req, res, next) =>{
    const oncls = await Oncls.find()

    res.status(201).json(
       {    success:true,
           oncls}
    )
})

// Get Online Class - Admin getAllIndFees

exports.getFiveHourOncls= catchAsyncError(async (req, res, next) =>{
    const data = await Oncls.find()

    const oncls = data[0]
    res.status(201).json(
        oncls
    )
})


// Get Online Class - Admin getAllIndFees

exports.getSixHourOncls= catchAsyncError(async (req, res, next) =>{
    const data = await Oncls.find()

    const oncls = data[1]
    res.status(201).json(
        oncls
    )
})

//get single Online Class - Admin
exports.getSingleOnCls = catchAsyncError(async (req, res, next) =>{
    const oncls = await Oncls.findById(req.params.id)
    if(!oncls) {
        return next(new ErrorHandler("On Class Not Found", 404))
    }
    res.status(200).json({
        success: true,
        oncls
      });
 })

// Update Online Class- Admin 
exports.updateOncls = catchAsyncError(async (req, res, next) =>{
    let oldOncls = await Oncls.findById(req.params.id)

    if(!oldOncls) {
        return next(new ErrorHandler("FAQ Not Found", 404))
    }

   oncls = await Oncls.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    
    res.status(201).json({
        success: true,
        oncls
    })
})

// Delete Online Class - Super-Admin

exports.deleteOncls = catchAsyncError(async (req, res, next) =>{
    const oncls = await Oncls.findById(req.params.id)

    if(!oncls) {
        return next(new ErrorHandler("FAQ not Found", 404))
    }

    await oncls.remove()

    res.status(201).json({
        success: true,
        message:"FAQ Deleted Successfully "
    })
}

)
