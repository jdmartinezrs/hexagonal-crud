const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            // Fetch the user from your database here if needed
            console.log(id);
            done(null, id); // Adjust as needed to return the user object
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ['profile', 'email'],
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile);
            done(null, profile);
        } catch (error) {
            console.error('Error saving/updating user:', error);
            done(error, null);
        }
    }));
};
