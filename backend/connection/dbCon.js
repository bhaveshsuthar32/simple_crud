const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = async() =>{
    try {
       const db = await mongoose.connect(process.env.DB_URL)
       console.log("connection successfully ")
    } catch (error) {
        console.log("Error : ",error)
    }
}

module.exports = mongoDB ;