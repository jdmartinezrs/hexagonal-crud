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
            return res.redirect('/home/v2.0.0');
        });
    })(req, res, next);
};

// exports.dashboard = (req,res)=>{
//     if(!req.user){
//         return res.redirect('/');
//     }
//     res.sendFile(path.join(__dirname, '../../public/views/dashboard.html'))
// }


// exports.getUserData = (req,res)=>{
//     if(!req.user){
//         console.log('no se encontró usuario en la solicitu');
//         return res.status(401).json({error:'No autenticado'});
//     }
//     console.log('Datos del usuario',req.user);
//     const userData={
//         username: requestIdleCallback.user.username,
//         email: req.user.email,
//         id:req.user.googleId
//     }
//     res.json(userData);
// };


// exports.logout = (req, res, next)=>{
//     req.logout((err) =>{
//         if(err){
//             return next (err);
//         }
//         res.redirect('/')
//     })
// }

