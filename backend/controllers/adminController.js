const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SignUp = require('../models/signModel');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET ;

const signAdmin = async (req, res) => {
    try {
        const user = req.body ;

        const userExist = await SignUp.findOne({email : user.email})
        if(userExist){
            return res.status(409).json({error : "Admin Already Exist"})
        }

        const hashPassword = await bcrypt.hash(user.password, 10);
        
        const userData = new SignUp({
            ...user,
            password : hashPassword
        });

        const saveSign = await userData.save();
        res.status(200).json(saveSign);

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}


const loginAdmin = async (req, res) =>{
    try {
        const {email, password} = req.body ;

        const userData = await SignUp.findOne({email});

        if(!userData){
            return res.status(404).json({error : "User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, userData.password);

        if(!isPasswordValid){
            return res.status(404).json({error : "Invalid password"})
        };

        const token = await jwt.sign({ userId : userData._id, username : userData.username, email : userData.email}, JWT_SECRET, {
            expiresIn : "30M",
        })
        
        await userData.save();

        res.status(200).json({token, message : "login successfull", isAdmin : userData.isAdmin})

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}


module.exports = {
    signAdmin,
    loginAdmin,
} ;