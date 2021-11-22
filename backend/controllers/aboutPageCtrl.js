const catchAsyncError = require('../middleware/catchAsyncError')
const AboutHero = require('../models/aboutHeroModel')
const ErrorHandler = require('../utils/errorHandler')

// Create About Area -- Super-Admin
exports.createAboutHero = catchAsyncError(async (req, res) =>{
    const content = await AboutHero.create(req.body)

    res.status(201).json({
        success: true,
        content
    })
})


// Get About Area - Admin

exports.getAboutHero = catchAsyncError(async (req, res) =>{
    const data = await AboutHero.find()

    const content = data[0]

    res.status(201).json(content)
})

//get single About Hero content - Admin
exports.getAboutHeroDetail = catchAsyncError(async (req, res, next) =>{
    const content = await AboutHero.findById(req.params.id)
    if(!content) {
        return next(new ErrorHandler("Content Not Found", 404))
    }
    const adata = content[0]
    res.status(200).json(
        {adata}
      );
 })

 // Update About Hero Area - Admin

exports.updateAboutHeroArea = catchAsyncError(async (req, res, next) =>{
    let content = await AboutHero.findById(req.params.id)

    if(!content) {
        return next(new ErrorHandler("Content Not Found", 404))
    }

    content = await AboutHero.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    const data = content[0]
    res.status(201).json({
        success: true,
        data
    })
})

// Delete About Hero Area - Super-Admin

exports.deleteAboutHeroArea = catchAsyncError(async (req, res, next) =>{
    const feature = await AboutHero.findById(req.params.id)

    if(!feature) {
        return next(new ErrorHandler("Feature Not Found", 404))
    }

    await feature.remove()

    res.status(201).json({
        success: true,
        message:"About Hero Area Successfully"
    })
}

)



