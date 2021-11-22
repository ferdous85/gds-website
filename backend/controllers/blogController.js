const catchAsyncError = require('../middleware/catchAsyncError')
const Blog = require('../models/blogModel')
const ErrorHandler = require('../utils/errorHandler')
const cloudinary = require("cloudinary");

// Create Blog -- Super-Admin
exports.createBlog = catchAsyncError(async (req, res, next) =>{

    const blogImg = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "blogImage",
        width: 1300        
      });

      const { title, smallTitle, date, description  } = req.body;
    
    const blog = await Blog.create({
        title, smallTitle, date, description,
        image: {
            public_id: blogImg.public_id,
            url: blogImg.secure_url,
          },
    })

    res.status(201).json({        
        success: true,
        blog
    })
})

// Get All Blogs - Admin

exports.getAllBlog = catchAsyncError(async (req, res, next) =>{
    
    const blogs = await Blog.find()

    res.status(201).json({
        success: true,
        blogs
    })
})

//get single Blog - Admin
exports.getSingleBlogDetail = catchAsyncError(async (req, res, next) =>{
    const blog = await Blog.findById(req.params.id)
    if(!blog) {
        return next(new ErrorHandler("Blog Not Found", 404))
    }
    res.status(200).json({
        success: true,
        blog
      });
 })


 // Update Blog - Admin

 exports.updateBlogContent = catchAsyncError(async (req, res, next) =>{

    const newBlog = {
        smallTitle:req.body.smallTitle,
        title:req.body.title,
        description:req.body.description
    }
      if(req.body.image !== "") {
          const oldBlog = await Blog.findById(req.params.id)
  
          const imageId = oldBlog.image.public_id
          await cloudinary.v2.uploader.destroy(imageId);
  
          const myCloud  = await cloudinary.v2.uploader.upload(req.body.image, {
              folder: "blogImage"        
            });
  
            newBlog.image={
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
  
      }
      
      const blog = await Blog.findByIdAndUpdate(
          req.params.id, newBlog, {
              new:true,
              useFindAndModify:false
  
          }
      )
  
      res.status(201).json({
          success: true,
          blog
      })
  })
  
  // Delete Hero Background Images - Super-Admin

exports.deleteBlog = catchAsyncError(async (req, res, next) =>{
    const blog = await Blog.findById(req.params.id)

    if(!blog) {
        return next(new ErrorHandler("Blog Not Found", 404))
    }

    await blog.remove()

    res.status(201).json({
        success: true,
        message:"Blog deleted Successfully"
    })
}

)
