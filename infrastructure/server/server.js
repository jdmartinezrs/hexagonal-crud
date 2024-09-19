const express = require('express');
const passport = require('passport');
const sessionGoogleOAuth = require("../../infrastructure/middlewares/sessionOAuth");
const path = require('path');

const indexRouter = require('../../application/routes/indexRouter');
const loginRouter = require('../../application/routes/loginRouter');
const createAccountRouter = require('../../application/routes/createAccountRouter');
const userRoutes = require('../../application/routes/userRoutes');
const productRoutes = require('../../application/routes/userProductosRouter');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling');
const { limiTotal } = require('../middlewares/rateLimit');
//const userProductosRouter = require('../../application/routes/userProductosRouter')

const createServer = () => {
    const app = express();

    app.use(express.json());

    app.use(jsonParseErrorHandler);
    app.use(limiTotal);
    app.use('/css', express.static(path.join(process.env.EXPRESS_STATIC, 'css')));
    app.use('/js', express.static(path.join(process.env.EXPRESS_STATIC, 'js')));
    app.use('/storage', express.static(path.join(process.env.EXPRESS_STATIC, 'storage')));

    
    app.use('/', indexRouter);
    app.use('/login', sessionGoogleOAuth,passport.initialize(), passport.session(), loginRouter);
    app.use('/createAccount', createAccountRouter);
    app.use('/users', userRoutes);
    app.use('/home', sessionGoogleOAuth,productRoutes);
    //app.use('/product');

    return app;
};


module.exports = createServer;


