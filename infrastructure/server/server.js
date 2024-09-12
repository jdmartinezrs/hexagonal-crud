const express = require('express');
const path = require('path');
const userRoutes = require('../../application/routes/userRoutes');
const productRoutes = require('../../application/routes/productRoutes');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling');
const { limiTotal } = require('../middlewares/rateLimit');

const createServer = (__dirname) => {

const app = express();
app.use(express.json());
app.use(jsonParseErrorHandler);
app.use(limiTotal);

app.use('/css', express.static(path.join(`${__dirname}/application`, process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(path.join(`${__dirname}/application`, process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(path.join(`${__dirname}/application`, process.env.EXPRESS_STATIC, 'storage')));





app.use('/users', (req, res, next)=>{
    req.__dirname = `${__dirname}/application`;
    next();
},userRoutes);


app.use('/product', productRoutes);
return app;
};

module.exports = createServer;