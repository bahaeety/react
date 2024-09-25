const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        maxlength: 50,
        minlength: 2

    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true, 'email already in use'],
        maxlength : 60,
        minlength : 5
    }
    ,
    password:{
        type:String,
        required:[true,'password is required'],
        minlength: 8,
        maxlength: 20,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    role:{
        type:String,
        required:[true,'role is required'],
        enum: ['admin', 'user'],
        default: 'user'
    },
    phone_number:{
        type:String,
        required:[true,'phone number is required'],
        unique:[true, 'phone number already in use'],
        maxlength: 20,
        minlength: 6,
        default: '02342334'
    },
    bio:{
        type:String,
        maxlength: 200,
    
    },
    adresse:{
        type:String,
        maxlength: 200

    }

    }
    , {timestamps : true});

const User = mongoose.model('User', user );
module.exports = User;