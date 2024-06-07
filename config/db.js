const mongoose = require('mongoose');

const connectDB = async () => {
    const dbconnection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${dbconnection.connection.host}`.cyan.underline.bold);
};

module.exports=connectDB;
