const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


// console.developers.google.com -> Google+ API enable
// -> Create credentials -> OAuth client ID
// -> configure consent screen
// -> web application -> Authorized JS origins -> http://localhost:5000
// -> Authorized redirect API's -> http://localhost:5000/* -> Create
// -> Client id -> 362007267422-i4fll8npkt5pntuhad8i1kngtdkoelef.apps.googleusercontent.com
// -> Client Secret -> -gs7GxTM727bGTDvYOzlF-rD
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;

app.listen(PORT);
