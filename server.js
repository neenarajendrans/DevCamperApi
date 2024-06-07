const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config/config.env'});

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Middleware Stack
// Body parser
app.use(express.json());

const logger = (req,res,next) => {
    req.hello ='hello world'; // req.hello is a variable that is passed in between middleware through the req.object.
    console.log('middleware ran')
    next();
}

app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${port} :  http://localhost:5000 `.magenta.bold)
})