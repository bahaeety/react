const User = require('../models/user');
const connection = require('../database/mongoose')
const Router = require('router');
const router = Router();

router.post('/register', (req,res)=>{
    const {Username, Email, Name, Password } = req.body ;
    const user = new User({
        name: Name,
        email: Email,
        username: Username,
        password: Password
    })
    user.save().then(()=>{
        console.log('user created')
    }).catch(()=>{
        console.log('error')
    })
})

module.exports = router;