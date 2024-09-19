const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../domain/models/userModel')
module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    try{

      done(null,id);
    } catch (err){
      done(err, null);
    }
    
  });

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']
  },async (accessToken, refreshToken, profile, done) => {
    try{
      let user = profile.json
      user.provider = profile.provider;
      delete profile.name
      done(null, user);
    } catch (error){
      console.error('Error saving/updating user:',error);
      done(error, null);

    }
    
  }));
};
