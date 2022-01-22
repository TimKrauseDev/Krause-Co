const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});


// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {

      console.log(profile);

      const existingUser = await User.findOne({provider: profile.provider, provider_id: profile.id });

      console.log(existingUSer);

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        provider: profile.provider, 
        provider_id: profile.id, 
        display_name: profile.displayName,
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: profile.emails[0].value,
        photos: profile.photos[0].value
      }).save();
      
      done(null, user);
    }
  )
);

// Twitter Strategy
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: "/auth/twitter/callback",
      proxy: true,
      includeEmail: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({provider: profile.provider, provider_id: profile.id });

      console.log(profile);
      
      if (existingUser) {
        return done(null, existingUser);
      }

       const user = await new User({
        provider: profile.provider, 
        provider_id: profile.id, 
        display_name: profile.displayName,
        email: profile.emails[0].value,
        photos: profile.photos[0].value
      }).save();
      
      done(null, user);
    }
  )
);


// Github Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.gitHubClientID,
      clientSecret: keys.gitHubClientSecret,
      callbackURL: "https://krause-co.herokuapp.com/auth/github/callback",
      scope: ['user:email'],
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({provider: profile.provider, provider_id: profile.id });
      
      if (existingUser) {
         return done(null, existingUser);
      }

       const user = await new User({
        provider: profile.provider, 
        provider_id: profile.id, 
        display_name: profile.displayName,
        email: profile.emails[0].value,
        photos: profile.photos[0].value
      }).save();
      
      done(null, user);
    }
  )
);