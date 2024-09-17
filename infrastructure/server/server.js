const express = require('express');
const passport = require('passport');
const path = require('path');
const configPassportGoogleOAuth = require('../middlewares/googleOAuth');

const indexRouter = require('../../application/routes/indexRouter');
const userRoutes = require('../../application/routes/userRoutes');
const loginRouter = require('../../application/routes/loginRouter');
const createAccountRouter = require('../../application/routes/createAccountRouter');
const productRoutes = require('../../application/routes/productRoutes');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling');
const { limiTotal } = require('../middlewares/rateLimit');
const {auth} = require('../../application/middelware/authenticateToken');
const sessionAuth = require('../../application/middelware/sessionLogin');
const cookieParser = require ('cookie-parser');

const createServer = () => {

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
configPassportGoogleOAuth(passport);

app.use(jsonParseErrorHandler);
app.use(limiTotal);



app.use('/css', express.static(path.join( process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(path.join( process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(path.join( process.env.EXPRESS_STATIC, 'storage')));

app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/createAccount',createAccountRouter);




app.use('/users',userRoutes);
app.use('/home',productRoutes);
app.use('/product', productRoutes);
return app;
};

module.exports = createServer;


