const catchAsyncError = require('../middleware/catchAsyncError')
const Contact = require('../models/contactModel')
const ErrorHandler = require('../utils/errorHandler')

// Create Contact  -- Super-Admin
exports.createContact = catchAsyncError(async (req, res) =>{
    const content = await Contact.create(req.body)

    res.status(201).json({
        success: true,
        content
    })
})

// Get Contact- Admin

exports.getAllContact = catchAsyncError(async (req, res) =>{
    const data = await Contact.find()

    const content = data[0]

    res.status(201).json(content)
})

//get single About Hero content - Admin
exports.getContactDetail = catchAsyncError(async (req, res, next) =>{
    const content = await Contact.findById(req.params.id)
    if(!content) {
        return next(new ErrorHandler("Contact Not Found", 404))
    }
    const adata = content[0]
    res.status(200).json(
        {adata}
      );
 })

 // Update Contact - Admin

exports.updateContactArea = catchAsyncError(async (req, res, next) =>{
    let content = await Contact.findById(req.params.id)

    if(!content) {
        return next(new ErrorHandler("Contact Not Found", 404))
    }

    content = await Contact.findByIdAndUpdate(
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

exports.deleteContactArea = catchAsyncError(async (req, res, next) =>{
    const feature = await Contact.findById(req.params.id)

    if(!feature) {
        return next(new ErrorHandler("Contact Not Found", 404))
    }

    await feature.remove()

    res.status(201).json({
        success: true,
        message:"Contact Delete Successfully"
    })
}

)

