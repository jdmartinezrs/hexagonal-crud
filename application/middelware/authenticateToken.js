
//const cookieParser = require('cookie-parser'); // Asegúrate de tener esto instalado

const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    let authHeader = req.headers.authorization || req.cookies.token;

    if (!authHeader) {
        return res.redirect("/");
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    if (!token) {
        return res.redirect("/");
    }
    jwt.verify(token, process.env.KEY_SECRET, (err, payload) => {
        if (err) {
            console.error("JWT verification failed:", err);
            return res.redirect("/users");
        }
        // Puedes hacer algo con el payload aquí si lo necesitas
        // console.log(payload);
        next();
    });
};
