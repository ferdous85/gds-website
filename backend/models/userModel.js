const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true, 'Please enter your Name'],
            maxlength:[30, "Name cannot exceed 30 char"],
            minlength:[4, "Name should have more than 4 char"]
        },
        email:{
            type:String,
            required:[true,'Please enter your email'],
            unique:true,
            validate:[validator.isEmail, "Please enter a valid Email"]
        },
        password:{
            type:String,
            required:[true,'Please enter your Password'],
            minlength:[8,"Name should have more than 8 char"],
            select: false
        },
        avatar:{
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        },
        role:{
            type:String,
            default: 'user'
        },
          resetPasswordToken: String,
          resetPasswordExpire: Date  
})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// JWT token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

//compare Password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

//Generating Password Reset Token
userSchema.methods.getResetPasswordToken =  function () {
    //Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // Hashing and add to userSchema
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.resetPasswordExpire = Date.now() + 15*60*1000

    return resetToken
}

module.exports = mongoose.model ('User', userSchema)