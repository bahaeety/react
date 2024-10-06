const express = require('express');
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
    req.session.Username = user.Username

    
    res.send({ message: "Login successful", user: { username: user.username } });

})

module.exports = router;
