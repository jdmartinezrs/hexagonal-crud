const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callBack"
  },
  (accessToken, refreshToken, profile, done) => {
    // lógica de autenticación
    return done(null, profile);
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
