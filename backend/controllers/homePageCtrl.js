const catchAsyncError = require('../middleware/catchAsyncError')
const HeroBg = require('../models/heroAreaModel')
const FeatureArea = require('../models/featureAreaMode')
const PricingArea = require('../models/pricingModel')
const ErrorHandler = require('../utils/errorHandler')
const cloudinary = require("cloudinary");

// Create Hero Background Image -- Super-Admin
exports.createHeroBg = catchAsyncError(async (req, res, next) =>{


    const heroImage = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "heroImage",
        width: 1300        
      });

      const { title, subtitle  } = req.body;
    
    const content = await HeroBg.create({
        title,
        subtitle,
        image: {
          public_id: heroImage.public_id,
          url: heroImage.secure_url,
        },
      })

    res.status(201).json({
        success: true,
        content
    })
})

// Get All Hero Background Images - Admin

exports.getHeroBg = catchAsyncError(async (req, res, next) =>{
    
    const contents = await HeroBg.find()

    res.status(201).json({
        success: true,
        contents
    })
})

//get single hero content - Admin
exports.getHeroBgDetail = catchAsyncError(async (req, res, next) =>{
    const content = await HeroBg.findById(req.params.id)
    if(!content) {
        return next(new ErrorHandler("Product Not Found", 404))
    }
    res.status(200).json({
        success: true,
        content,
      });
 })

// Update Hero Background Images - Admin

exports.updateHeroBg = catchAsyncError(async (req, res, next) =>{

  const newContent = {
      title: req.body.title,
      subtitle:req.body.subtitle
  }
    if(req.body.image !== "") {
        const oldContent = await HeroBg.findById(req.params.id)

        const imageId = oldContent.image.public_id
        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud  = await cloudinary.v2.uploader.upload(req.body.image, {
            folder: "heroImage"        
          });

          newContent.image={
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          }

    }
    
    const content = await HeroBg.findByIdAndUpdate(
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

exports.deleteHeroBg = catchAsyncError(async (req, res, next) =>{
    const herobg = await HeroBg.findById(req.params.id)

    if(!herobg) {
        return next(new ErrorHandler("Image Not Found", 404))
    }

    await herobg.remove()

    res.status(201).json({
        success: true,
        message:"Image deleted Successfully"
    })
}

)

// Create Feature Area -- Super-Admin
exports.createFeatureArea = catchAsyncError(async (req, res) =>{
    const feature = await FeatureArea.create(req.body)

    res.status(201).json({
        success: true,
        feature
    })
})

// Get Feature Area - Admin

exports.getFeatureArea = catchAsyncError(async (req, res) =>{
    const feature = await FeatureArea.find()
    const data = feature[0]
    res.status(201).json(data)
})

//get single Feature content - Admin
exports.getFeatureDetail = catchAsyncError(async (req, res, next) =>{
    const feature = await FeatureArea.findById(req.params.id)
    if(!feature) {
        return next(new ErrorHandler("Feature Not Found", 404))
    }
    const data = feature[0]
    res.status(200).json(
        data
      );
 })

// Update Feature Area - Admin

exports.updateFeatureArea = catchAsyncError(async (req, res, next) =>{
    let feature = await FeatureArea.findById(req.params.id)

    if(!feature) {
        return next(new ErrorHandler("Feature Not Found", 404))
    }

    feature = await FeatureArea.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )
    const data = feature[0]
    res.status(201).json({
        success: true,
        data
    })
})

// Delete Feature Area - Super-Admin

exports.deleteFeatureArea = catchAsyncError(async (req, res, next) =>{
    const feature = await FeatureArea.findById(req.params.id)

    if(!feature) {
        return next(new ErrorHandler("Feature Not Found", 404))
    }

    await feature.remove()

    res.status(201).json({
        success: true,
        message:"Feature Deleted Successfully"
    })
}

)


// Create Pricing Table -- Super-Admin
exports.createPricingArea = catchAsyncError(async (req, res, next) =>{
    const pricing = await PricingArea.create(req.body)

    res.status(201).json({
        success: true,
        pricing
    })
})


// Get Pricing - Admin

exports.getPricingArea = catchAsyncError(async (req, res, next) =>{
    const pricings = await PricingArea.find()

    res.status(201).json({
        success: true,
        pricings
    })
})

//get single Pricing content - Admin
exports.getPricingDetail = catchAsyncError(async (req, res, next) =>{
    const pricing = await PricingArea.findById(req.params.id)
    if(!pricing) {
        return next(new ErrorHandler("Single Price Not Found", 404))
    }
    res.status(200).json({
        success: true,
        pricing
      });
 })


// Update Pricing - Admin

exports.updatePricingArea = catchAsyncError(async (req, res, next) =>{
    let pricing = await PricingArea.findById(req.params.id)

    if(!pricing) {
        return next(new ErrorHandler("Pricing Table Not Found", 404))
    }

    pricing = await PricingArea.findByIdAndUpdate(
        req.params.id, req.body, {
            new:true,
            useFindAndModify:false

        }
    )

    res.status(201).json({
        success: true,
        pricing
    })
})


// Delete Pricing - Super-Admin

exports.deletePricingArea = catchAsyncError(async (req, res, next) =>{
    const pricing = await PricingArea.findById(req.params.id)

    if(!pricing) {
        return next(new ErrorHandler("Pricing Table Not Found", 404))
    }

    await pricing.remove()

    res.status(201).json({
        success: true,
        message:"Pricing Table Deleted Successfully"
    })
}

)