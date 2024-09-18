
const express = require('express');
const path = require('path'); 
const router = express.Router();
const passport = require('passport');

router.get("/", (req,res)=>{
    res.sendFile(path.join( process.env.EXPRESS_STATIC, 'index.html'));
})


module.exports = router;
