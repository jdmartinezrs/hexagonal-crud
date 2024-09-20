const passport = require('passport');
//const path = require('path');

 
exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', async (err, user, info) => {
        if (err) {
            console.error('Error en la autenticación', err);
            if (err.code === 11000) {
                return res.redirect('/?error=El email ya existe');
            }
            return next(err);
        }

        if (!user) {
            console.log('Autenticación fallida', info);
            return res.redirect('/');
        }

        req.logIn(user, (err) => {
            if (err) {
                console.error('Error al iniciar sesión', err);
                return next(err);
            }
            console.log('Usuario autenticado:', user);
            return res.redirect('v2.0.0');
        });
    })(req, res, next);
};




// exports.logout = (req, res, next)=>{
//     req.logout((err) =>{
//         if(err){
//             return next (err);
//         }
//         res.redirect('/')
//     })
// }

