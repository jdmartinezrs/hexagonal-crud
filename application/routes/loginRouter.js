const passport = require('passport');
const express = require('express');
const path = require('path'); 
const authController= require ('../controllers/loginController');

const router = express.Router();


router.get("/", (req,res)=>{
    res.sendFile(path.join( process.env.EXPRESS_STATIC, 'views/log-In-1.html'));
})


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callBack', authController.googleAuthCallback);





module.exports = router;
