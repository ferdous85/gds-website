const catchAsyncError = require('../middleware/catchAsyncError')
const Course = require('../models/courseModel')
const ErrorHandler = require('../utils/errorHandler')
const cloudinary = require("cloudinary");

// Create Course -- Super-Admin
exports.createCourse = catchAsyncError(async (req, res, next) =>{


    const courseImage = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "courseImage",
        width: 1300        
      });

      const { name, price, description  } = req.body;
    
    const course = await Course.create(
        {name, price, description,
            image: {
                public_id: courseImage.public_id,
                url: courseImage.secure_url,
              }
        }

      )

    res.status(201).json({
        success: true,
        course
    })
})

// Get All Course - Admin

exports.getAllCourses = catchAsyncError(async (req, res, next) =>{
    
    const courses = await Course.find()

    res.status(201).json({
        success: true,
        courses
    })
})

//get single course - Admin
exports.getSingleCourseDetail = catchAsyncError(async (req, res, next) =>{
    const course = await Course.findById(req.params.id)
    if(!course) {
        return next(new ErrorHandler("Course Not Found", 404))
    }
    res.status(200).json({
        success: true,
        course
      });
 })


 // Update Course - Admin

 exports.updateCourseContent = catchAsyncError(async (req, res, next) =>{

    const newContent = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
      if(req.body.image !== "") {
          const oldContent = await Course.findById(req.params.id)
  
          const imageId = oldContent.image.public_id
          await cloudinary.v2.uploader.destroy(imageId);
  
          const myCloud  = await cloudinary.v2.uploader.upload(req.body.image, {
              folder: "courseImage"        
            });
  
            newContent.image={
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
  
      }
      
      const content = await Course.findByIdAndUpdate(
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
  
  // Delete Hero Background Images - Super-Admin

exports.deleteCourse = catchAsyncError(async (req, res, next) =>{
    const course = await Course.findById(req.params.id)

    if(!course) {
        return next(new ErrorHandler("Course Not Found", 404))
    }

    await course.remove()

    res.status(201).json({
        success: true,
        message:"Course deleted Successfully"
    })
}

)
