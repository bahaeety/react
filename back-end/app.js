const express = require('express');
const user = require('./routes/user')
const cors = require('cors');
const bcrypt = require('bcrypt')
const session = require('express-session')



const connection = require('./database/mongoose')
const User = require('./models/user');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // your React app's URL
    credentials: true, // Allow cookies to be sent
}));
app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: false
    }
}))

app.use('/user',user);

module.exports = app;                        
