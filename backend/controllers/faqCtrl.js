const catchAsyncError = require('../middleware/catchAsyncError')
const Faq = require('../models/faqModel')
const ErrorHandler = require('../utils/errorHandler')


// Create FAQ -- Super-Admin
exports.createFaq = catchAsyncError(async (req, res) =>{
    const faq = await Faq.create(req.body)

    res.status(201).json({
        success: true,
        faq
    })
})

// Get FAQ - Admin getAllIndFees

exports.getAllFaq = catchAsyncError(async (req, res, next) =>{
    const faqs = await Faq.find()

    res.status(201).json({
        success: true,
        faqs
    })
})
//get single FAQ - Admin getIndFeesDetails
exports.getFaqDetails = catchAsyncError(async (req, res, next) =>{
    const faq = await Faq.findById(req.params.id)
    if(!faq) {
        return next(new ErrorHandler("FAQ Not Found", 404))
    }
    res.status(200).json({
        success: true,
        faq
      });
 })
// Update FAQ - Admin 

exports.updateFaq = catchAsyncError(async (req, res, next) =>{
    let oldFaq = await Faq.findById(req.params.id)

    if(!oldFaq) {
        return next(new ErrorHandler("FAQ Not Found", 404))
    }

   faq = await Faq.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    
    res.status(201).json({
        success: true,
        faq
    })
})

// Delete Individual Fees - Super-Admin

exports.deleteFaq = catchAsyncError(async (req, res, next) =>{
    const faq = await Faq.findById(req.params.id)

    if(!faq) {
        return next(new ErrorHandler("FAQ not Found", 404))
    }

    await faq.remove()

    res.status(201).json({
        success: true,
        message:"FAQ Deleted Successfully "
    })
}

)
