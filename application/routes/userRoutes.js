
const express = require('express');
const path = require('path');
const UserController = require('../controllers/userController');
const UserValidator = require('../validator/userValidator');
const {auth}= require('../middelware/authenticateToken')
const router = express.Router();
const userController = new UserController();
const userValidator = new UserValidator();
const cookieParser = require('cookie-parser')



router.get('/',(req,res)=>{
    res.sendFile(path.join(req.__dirname, process.env.EXPRESS_STATIC,'/index.html'));
});

router.get('/:id',auth, userValidator.validateUserId(), (req, res) => userController.getUser(req, res));
router.post('/', userValidator.validateUserData(), (req, res) => userController.createUser(req, res));
router.post('/login', cookieParser(), userValidator.validateUserLogin(), (req, res) => userController.verifyUser(req, res));
router.put('/:id', auth, userValidator.validateUserUpdateDataById(), (req, res) => userController.updateUser(req, res));
router.delete('/:id', auth, userValidator.validateUserId(), (req, res) => userController.deleteUser(req, res));
router.get('/search', auth, (req, res) => userController.searchUsers(req, res));


module.exports = router;


