const catchAsyncError = require('../middleware/catchAsyncError')
const Package = require('../models/packageModel')
const ErrorHandler = require('../utils/errorHandler')





// Create Package -- Super-Admin
exports.createPackage = catchAsyncError(async (req, res, next) =>{
    const package = await Package.create(req.body)

    res.status(201).json({
        success: true,
        package
    })
})


// Get All Package - Admin

exports.getPackage = catchAsyncError(async (req, res, next) =>{
    const packages = await Package.find()

    res.status(201).json({
        success: true,
        packages
    })
})

//get single Package - Admin
exports.getPackageDetails = catchAsyncError(async (req, res, next) =>{
    const content = await Package.findById(req.params.id)
    if(!content) {
        return next(new ErrorHandler("Single Package Not Found", 404))
    }
    res.status(200).json({
        success: true,
        content
      });
 })


// Update Package - Admin

exports.updatePackages = catchAsyncError(async (req, res, next) =>{
    let package = await Package.findById(req.params.id)

    if(!package) {
        return next(new ErrorHandler("Package Table Not Found", 404))
    }

    package = await Package.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )

    res.status(201).json({
        success: true,
        package
    })
})


// Delete Package - Super-Admin

exports.deletePackage = catchAsyncError(async (req, res, next) =>{
    const package = await Package.findById(req.params.id)

    if(!package) {
        return next(new ErrorHandler("Package Table Not Found", 404))
    }

    await package.remove()

    res.status(201).json({
        success: true,
        message:"Package Deleted Successfully"
    })
}

)