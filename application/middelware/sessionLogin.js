const session = require('express-session');
const sessionPassport = require('passport');

const sessionAuth = require('express').Router();


module.exports = sessionAuth.use(session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure:true,
        maxAge: parseInt(process.env.EXPRESS_EXPIRE)
    }
}))


module.exports = sessionPassport.use(session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: false, 
    
}))



