const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../domain/models/userModel')

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null,user);
  
  });

  passport.deserializeUser(async (user, done) => {
    try{

      done(null,user);
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
      
      let userInstance = new User();
     
      let resAgregate = await userInstance.aggregate([{
        $match:{
          email: profile._json.email
        }
      }]);
      if(resAgregate.length)return done(null, resAgregate);

      //console.log(user);
      let resInser = await userInstance.insert(profile._json)
      
      done(null,resInser);
    } catch (error){
      console.error('Error saving/updating user:',error);
      done(error, null);
    }
  }));
};
