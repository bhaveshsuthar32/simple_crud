const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : false
    },
    age : {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : false
    },
    img : {
        type : String,
        required : false
    }
    
})

const User = mongoose.model('user', userSchema)

module.exports = User ;