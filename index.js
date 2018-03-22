const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');

const app = express();


// console.developers.google.com -> Google+ API enable
// -> Create credentials -> OAuth client ID
// -> configure consent screen
// -> web application -> Authorized JS origins -> http://localhost:5000
// -> Authorized redirect API's -> http://localhost:5000/* -> Create
// -> Client id -> 362007267422-i4fll8npkt5pntuhad8i1kngtdkoelef.apps.googleusercontent.com
// -> Client Secret -> ???
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken)
}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],

}));


const PORT = process.env.PORT || 5000;

app.listen(PORT);
