const User = require('../models/UserModel');

const allUserShow = async(req,res) => {
    try{
        let users = await User.find({});
        return res.status(200).send({
            success : true,
            message : 'users fetch successfully',
            users
        })
    }catch(err){
        return res.status(501).send({
            success : false,
            error : err
        })
    }
}

module.exports = {
    allUserShow
}