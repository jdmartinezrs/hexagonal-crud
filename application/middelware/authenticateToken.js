const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Asegúrate de tener esto instalado

exports.auth = (req, res, next) => {
    let authHeader = req.headers['authorization'] || req.cookies.favid;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        authHeader = authHeader.substring(7); // Eliminar 'Bearer ' del encabezado
    }

    const token = authHeader;
    if (!token) return res.redirect("/users");

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.redirect("/users");
        console.log(payload);
        next();
    });
}
