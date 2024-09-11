const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) =>{
    const authHeader = req.headers ['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (!token) return res.status(401).json({message: "Token not given"});
    

    jwt.verify(token,process.env.JWT_SECRET,(err, payload) =>{
        if(err) return res.status(403).json({ message:'token invalid'});
        console.log(payload);
       
        next();
    })
}