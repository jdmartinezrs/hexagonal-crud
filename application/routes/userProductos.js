const express = require('express');
const path = require('path');
const{auth, authCookie}= require('../middelware/authenticateToken')
const sessionAuth = require('../middelware/sessionLogin');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.get("v1.1.0", sessionAuth, auth,(req,res)=>{
    res.sendFile(path.join(process.env.EXPRESS_STATIC, "views/home.html"))
})

router.get("v1.0.0", cookieParser(),authCookie,(req,res)=>{
    res.sendFile(path.join(process.env.EXPRESS_STATIC, "views/home.html"))
})

router.get("v2.0.0", (req,res)=>{
    console.log(req.session);
    
    res.sendFile(path.join(process.env.EXPRESS_STATIC, 'src/views/home.html'))
})

// router.post("/", (req,res)=>{})
module.exports = router;


