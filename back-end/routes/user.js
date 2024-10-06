const User = require('../models/user');
const connection = require('../database/mongoose')
const Router = require('router');
const router = Router();

router.post('/register', (req,res)=>{
    const {Username, Email,Tel, Name, Password } = req.body ;
    const user = new User({
        name: Name,
        email: Email,
        username: Username,
        tel: Tel,
        password: Password
    })
    console.log()
    console.log(user)
    user.save().then(()=>{
        console.log('user created')
    }).catch(()=>{
        console.log('error')
    })
})

module.exports = router;