
//const cookieParser = require('cookie-parser'); // Asegúrate de tener esto instalado

const jwt = require('jsonwebtoken');

exports.authCookie = (req, res, next) => {
    let authHeader = undefined;

    if (req.headers.authorization) authHeader= req.headers.authorization
    if(req.cookies.token)authHeader = req.cookies.token
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.redirect("/users")

    jwt.verify(token, process.env.KEY_SECRET, (err, payload) => {
        if (err) return res.redirect("/users")
            
            next();
        });
    }

    exports.auth = (req, res, next)=>{
        let authHeader = undefined;
        if(req.headers.authorization) authHeader = req.headers.authorization
        if(req.session.token) authHeader = req.session.token

        const token = authHeader && authHeader.split(' ')[1];
        if(!token) return res.redirect("/users")

        jwt.verify(token, process.env.KEY_SECRET,(err,payload)=>{
            if(err)return res.redirect('/users')
            next();
        })
    }



