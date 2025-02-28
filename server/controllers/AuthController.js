const UserModel = require('../models/UserModel');
const JWT = require('jsonwebtoken');

const cloudinary = require('cloudinary').v2;

const login = async(req,res) => {
    try{
        console.log("done");
        
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                success : false,
                message : "All field is required"
            })
        }
        let user = await  UserModel.findOne({email:email});
        if(!user || user.password != password){
            return res.status(401).send({
                success : false,
                message : "Email and Password not valid"
            })
        }
        //create token
        let token = JWT.sign({payload:user},'mahadev',{expiresIn:'3hr'})
        return res.status(200).send({
            success : true,
            message : "Login successfully",
            token,
            user
        })
    }catch(err){
        return res.status(501).send({
            success : false,
            error : err
        }) 
    }
}
const registerUser = async(req,res) => {
    try{
        const {name,email,password,gender,city,contact} = req.body;
        if(!name || !email || !password || !gender || !city || !contact){
            return res.status(401).send({
                success : false,
                message : "All field is required"
            })
        }

        if(!req.file){
            return res.status(401).send({
                success : false,
                message : "Please upload image"
            })
        }

        let existingUser = await UserModel.findOne({email:email});
        if(existingUser){
            return res.status(401).send({
                success : false,
                message : "User already exist"
            })
        }

        //image upload in cloudinary
        let imageUrl = await cloudinary.uploader.upload(req.file.path);
        //image upload in cloudinary

        let user = await UserModel.create({
            name : name,
            email : email,
            password : password,
            gender : gender,
            city : city,
            contact : contact,
            image : imageUrl.secure_url,
            public_id : imageUrl.public_id
        })
        return res.status(200).send({
            success : true,
            message : "User successfully register",
            user
        })
    }catch(err){
        return res.status(501).send({
            success : false,
            error : err
        })
    }
}
const adminAccess = (req,res) => { 
    return res.send("Admin Access");
}
const managerAccess = (req,res) => {
    return res.send("Manager Access");
}
module.exports = {
    login,registerUser,managerAccess,adminAccess
}