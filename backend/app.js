const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require("path");

const errorMiddleware = require('./middleware/error')

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())

//Route imports


const user = require('./routes/userRoute')
const heroBg = require('./routes/homePageRoute')
const about = require('./routes/aboutPageRoute')
const course = require('./routes/courseRoute')
const package = require('./routes/packageRoute')
const indfees = require('./routes/indfeesRoute')
const quicktest = require('./routes/quickTestRoute')
const blog = require('./routes/blogRoute')
const faq = require('./routes/faqRoute')
const oncls = require('./routes/onclsRoute')
const contact = require('./routes/contactRoute')
const fiveimg = require('./routes/fiveImgRoute')
const siximg = require('./routes/sixImgRoute')



app.use('/api/v1', user)
app.use('/api/v1', heroBg)
app.use('/api/v1', about)
app.use('/api/v1', course)
app.use('/api/v1', package)
app.use('/api/v1', indfees)
app.use('/api/v1', quicktest)
app.use('/api/v1', blog)
app.use('/api/v1', faq)
app.use('/api/v1', oncls)
app.use('/api/v1', contact)
app.use('/api/v1', fiveimg)
app.use('/api/v1', siximg)


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });

//Middleware for error
app.use(errorMiddleware)

module.exports = app