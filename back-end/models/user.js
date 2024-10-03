const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name:{
        type:String,
        required:[true,'name is required']

    },
    email:{
        type:String,
        required:[true,'email is required']
    }
    ,
    password:{
        type:String,
        required:[true,'password is required']
        // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password invalid, it should contain 8-20 alphanumeric letters and be unique!"]
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

        default: '2'
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