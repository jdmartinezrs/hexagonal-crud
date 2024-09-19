const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    done(null, user);
  });

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']
  },async (accessToken, refreshToken, profile, done) => {
    try{
      console.log("davidR10",profile);
      done(null, profile);
    } catch (error){
      console.error('Error saving/updating user:',error);
      done(error, null);

    }
    
  }));
};
