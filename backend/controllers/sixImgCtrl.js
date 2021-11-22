const catchAsyncError = require('../middleware/catchAsyncError')
const SixImg = require('../models/sixImgModel')
const ErrorHandler = require('../utils/errorHandler')
const cloudinary = require("cloudinary");

// Create Online Class Image -- Super-Admin
exports.createSixImg = catchAsyncError(async (req, res, next) =>{

    const imgContent = await SixImg.create(req.body)

    // const courseImage = await cloudinary.v2.uploader.upload(req.body.image, {
    //     folder: "fiveImage",
    //     width: 1300        
    //   });

    //   const { name } = req.body;
    
    // const course = await Course.create(
    //     {name,
    //         image: {
    //             public_id: courseImage.public_id,
    //             url: courseImage.secure_url,
    //           }
    //     }

    //   )

    res.status(201).json({
        success: true,
        imgContent
    })
})


//get single Image - Admin
exports.getSingleSixImg = catchAsyncError(async (req, res, next) =>{
    const sixContent = await SixImg.findById(req.params.id)
    if(!sixContent) {
        return next(new ErrorHandler("Course Not Found", 404))
    }
    res.status(200).json({
        success: true,
        sixContent
      });
 })


// Get All Six Image - Admin

exports.getAllSixImg = catchAsyncError(async (req, res, next) =>{
    
    const sixContent = await SixImg.find()

    res.status(201).json({
        success: true,
        sixContent
    })
})


 // Update Five Image - Admin

 exports.updateSixImg = catchAsyncError(async (req, res, next) =>{

    const newContent = {
        name:req.body.name
    }
      if(req.body.image !== "") {
          const oldContent = await SixImg.findById(req.params.id)
  
          const imageId = oldContent.image.public_id
          await cloudinary.v2.uploader.destroy(imageId);
  
          const myCloud  = await cloudinary.v2.uploader.upload(req.body.image, {
              folder: "sixImage"        
            });
  
            newContent.image={
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
  
      }
      
      const content = await SixImg.findByIdAndUpdate(
          req.params.id, newContent, {
              new:true,
              useFindAndModify:false
  
          }
      )
  
      res.status(201).json({
          success: true,
          content
      })
  })
  

 // Delete Six Images - Super-Admin

 exports.deleteSixImg = catchAsyncError(async (req, res, next) =>{
    const content = await SixImg.findById(req.params.id)

    if(!content) {
        return next(new ErrorHandler("Image Not Found", 404))
    }

    await content.remove()

    res.status(201).json({
        success: true,
        message:"Image deleted Successfully"
    })
}

)
