const User = require("../models/userModel");
const path = require('path')

    const addUser = async (req, res)=> {
        try {
            const {name, age, city} = req.body;

            const imagePath = req.file.path ;
        
            const userData = new User({name, age, city, img : imagePath});
            const saveUser = await userData.save();
            // console.log(saveUser)
            res.status(200).json(saveUser)

        } catch (error) {
            res.status(500).json({error : error.message});
        }
    }


const getUser = async (req,res)=>{
    try {
        const getData = await User.find();
        res.status(200).json(getData);
    } catch (error) {
        console.log("error : ", error);
    }
}

const getUserById = async (req,res)=>{
    try {
        const id = req.params.id;

        const getData = await User.findById(id);
        res.status(200).json(getData);
    } catch (error) {
        console.log("Error : ",error);
    }
}

const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id ;

        const userData = await User.findById(id);
        if(!userData){
            return res.status(404).json({message : "user not found"})
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({message : "delete successfully "})
    } catch (error) {
        console.log("error : ", error);
    }
}
const updateUser = async (req, res) => {
    try {
        const { name, age, city } = req.body;
        const id = req.params.id ;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, age, city },
            { new: true } 
        );
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    addUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser,
}