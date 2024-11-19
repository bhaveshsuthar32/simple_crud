const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    username : {
        type : String,
        required : false,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : false,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    }

},{timestamps : true });

const SignUp = mongoose.model('signUp', signSchema);

module.exports = SignUp;