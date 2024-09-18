
const express = require('express');
const path = require('path');
const UserController = require('../controllers/userController');
const UserValidator = require('../validator/userValidator');

const cookieParser = require('cookie-parser')
const {auth, authCookie}= require('../middelware/authenticateToken')
const sessionAuth= require('../middelware/sessionLogin')
const{versionMiddleware} = require('../middelware/version')

const router = express.Router({mergeParams: true});
const userController = new UserController();
const userValidator = new UserValidator();


//router.get('/',(req,res)=>{
 //   res.sendFile(path.join( process.env.EXPRESS_STATIC,'/index.html'));
//});

router.get('/:id',auth, userValidator.validateUserId(), (req, res) => userController.getUser(req, res));
router.get('/search', auth, (req, res) => userController.searchUsers(req, res));

router.post('/', userValidator.validateUserData(), (req, res) => userController.createUser(req, res));
router.post('/login' ,versionMiddleware("1.1.0"),sessionAuth, userValidator.validateUserLogin(), (req, res) => userController.verifyUser(req, res));
router.post('/login' ,versionMiddleware("1.0.0"), cookieParser(), userValidator.validateUserLogin(), (req, res) => userController.verifyUserCookies(req, res));




router.put('/:id', auth, userValidator.validateUserUpdateDataById(), (req, res) => userController.updateUser(req, res));
router.delete('/:id', auth, userValidator.validateUserId(), (req, res) => userController.deleteUser(req, res));


module.exports = router;


