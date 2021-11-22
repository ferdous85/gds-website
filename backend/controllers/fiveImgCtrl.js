const catchAsyncError = require('../middleware/catchAsyncError')
const FiveImg = require('../models/fiveImgModel')
const ErrorHandler = require('../utils/errorHandler')
const cloudinary = require("cloudinary");

// Create Online Class Image -- Super-Admin
exports.createFiveImg = catchAsyncError(async (req, res, next) =>{

    const imgContent = await FiveImg.create(req.body)

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
exports.getSingleFiveImg = catchAsyncError(async (req, res, next) =>{
    const imgContent = await FiveImg.findById(req.params.id)
    if(!imgContent) {
        return next(new ErrorHandler("Course Not Found", 404))
    }
    res.status(200).json({
        success: true,
        imgContent
      });
 })


// Get All Five Image - Admin

exports.getAllFiveImg = catchAsyncError(async (req, res, next) =>{
    
    const imgContent = await FiveImg.find()

    res.status(201).json({
        success: true,
        imgContent
    })
})


 // Update Five Image - Admin

 exports.updateFiveImg = catchAsyncError(async (req, res, next) =>{

    const newContent = {
        name:req.body.name
    }
      if(req.body.image !== "") {
          const oldContent = await FiveImg.findById(req.params.id)
  
          const imageId = oldContent.image.public_id
          await cloudinary.v2.uploader.destroy(imageId);
  
          const myCloud  = await cloudinary.v2.uploader.upload(req.body.image, {
              folder: "fiveImage"        
            });
  
            newContent.image={
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
  
      }
      
      const content = await FiveImg.findByIdAndUpdate(
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
  

 // Delete Five Images - Super-Admin

 exports.deleteFiveImg = catchAsyncError(async (req, res, next) =>{
    const content = await FiveImg.findById(req.params.id)

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
