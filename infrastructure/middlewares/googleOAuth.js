const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done) => {
        try {
            console.log(id);
            done(null, id);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/login/auth/google",
        scope: ['profile', 'email'],
        state: false
    }, async(accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile);
            done(null, profile);
        } catch (error) {
            console.error('Error saving/updating user:', error);
            done(error, null);
        }
    }));
}











// const verify = async (acessToken, refreshToken, profile, done) => {
//     try{
//         console.log(profile);
//         return done(null,null);
//     }catch (error){
//         console.error('Error saving/updating user:', error);
//         done(error, null);
//     }
// }

