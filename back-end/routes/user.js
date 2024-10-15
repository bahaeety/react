const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { Username, Email, Tel, Name, Password } = req.body;
    
    const user = new User({
        name: Name,
        email: Email,
        username: Username,
        phone_number: Tel,
        password: Password
    });
    console.log(user);
    await user.save();
});

router.post('/login',async(req,res)=>{
    const {Email,Password} = req.body;
    const user = await User.findOne({email:Email});
    if(!user){
        return res.status(400).send({message:"User not found"});
    }
    const isMatch = await bcrypt.compare(Password,user.password);
    if(!isMatch){
        return res.status(400).send({message:"Invalid password"});
    }

    req.session.id = user._id
    req.session.Username = user.username

    
    res.send({ message: "Login successful", user: user.username  , user1: req.session.id , user2: req.session.Username});

})
router.get('/session-checker',(req,res)=>{
    if(req.session.id){
        res.send({message:"Session is active",user:req.session.id})
        }
        else{
            res.send({message:"Session is not active",user:req.session.id})
    }
})

module.exports = router;
